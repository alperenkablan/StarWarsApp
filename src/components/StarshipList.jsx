

function StarshipList({ starships, selectStarship }) {
  const getImageUrl = (starship) => {
    const id = starship.url.split('/').slice(-2, -1)[0];
    return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
  };

  return (
    <div id="starship-list">
      {starships.map(starship => (
        <div key={starship.url} className="starship-item" onClick={() => selectStarship(starship)}>
          <img src={getImageUrl(starship)} alt={starship.name} />
          <h3>{starship.name}</h3>
          <p>Model: {starship.model}</p>
          <p>Hız: {starship.max_atmosphering_speed}</p>
        </div>
      ))}
    </div>
  );
}

export default StarshipList;
