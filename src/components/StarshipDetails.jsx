

function StarshipDetails({ starship, goBack }) {
  const getImageUrl = (starship) => {
    const id = starship.url.split('/').slice(-2, -1)[0];
    return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
  };

  return (
    <div id="starship-details">
      <img src={getImageUrl(starship)} alt={starship.name} />
      <h2>{starship.name}</h2>
      <p>Model: {starship.model}</p>
      <p>Yolcu Sayısı: {starship.passengers}</p>
      <p>Maksimum Atmosferik Hız: {starship.max_atmosphering_speed}</p>
      <p>Üretici: {starship.manufacturer}</p>
      <p>Mürettebat: {starship.crew}</p>
      <p>Kargo Kapasitesi: {starship.cargo_capacity}</p>
      <button onClick={goBack}>Geri Dön</button>
    </div>
  );
}

export default StarshipDetails;
