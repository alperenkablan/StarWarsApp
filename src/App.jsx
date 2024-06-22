import { useState, useEffect } from 'react';
import StarshipList from './components/StarshipList';
import StarshipDetails from './components/StarshipDetails';
import './App.css';

function App() {
  const [starships, setStarships] = useState([]);
  const [selectedStarship, setSelectedStarship] = useState(null);
  const [nextPageUrl, setNextPageUrl] = useState('https://swapi.dev/api/starships/');
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (nextPageUrl) {
      fetchStarships(nextPageUrl);
    }
  }, [nextPageUrl]);

  const fetchStarships = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setStarships(prevStarships => [...prevStarships, ...data.results]);
    setNextPageUrl(data.next);
  };

  const searchStarships = async () => {
    const response = await fetch(`https://swapi.dev/api/starships/?search=${query}`);
    const data = await response.json();
    setStarships(data.results);
    setNextPageUrl(null);  // Arama yapıldığında 'Daha Fazla' düğmesini gizlemek için.
  };

  return (
    <div className="App">
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Yıldız gemisi adı veya modeli girin" 
      />
      <button onClick={searchStarships}>Ara</button>

      {selectedStarship ? (
        <StarshipDetails starship={selectedStarship} goBack={() => setSelectedStarship(null)} />
      ) : (
        <>
          <StarshipList starships={starships} selectStarship={setSelectedStarship} />
          {nextPageUrl && <button onClick={() => fetchStarships(nextPageUrl)}>Daha Fazla</button>}
        </>
      )}
    </div>
  );
}

export default App;
