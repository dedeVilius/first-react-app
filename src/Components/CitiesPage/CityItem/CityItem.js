
const CityItem = (props) => {

  const { isCapital, location, name, population, touristAttractions } = props.data;
  const { continent, country } = location

  const capitalClass = isCapital ? 'capital' : '';

  let attractionsElement = <h3>{name} have no tourist attractions...</h3>;

  if (touristAttractions.length > 0) {
    attractionsElement = <h3>Main tourist attraction of {name} is:</h3>;
    if (touristAttractions.length > 1) {
      attractionsElement = <h3>Main tourist attraction of {name} are:</h3>;
    }
  }

  return (
    <div className='city-item'>
      <div className='city-title'>
        <h1 className={`${capitalClass}`}>{name}</h1>
      </div>
      <div className="city-details">
        <p>{name} city is located in {continent}, {country} and has population of {population} people.</p>
      </div>
      <div className='city-attractions'>
        {attractionsElement}
        <ul>
          {
            touristAttractions.map((attraction, index) => <li key={index}>{attraction}</li>)
          }
        </ul>
      </div>
    </div>
  )
}

export default CityItem