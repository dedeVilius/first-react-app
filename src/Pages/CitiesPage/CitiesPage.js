import { useState } from "react";
import Container from "../../Components/Container/Container"
import CityItem from "../../Components/CitiesPage/CityItem/CityItem";
import './CitiesPage.css';

const CitiesPage = () => {

  let citiesData = [
    {
      name: 'Vilnius',
      population: 500000,
      location: {
        continent: 'Europe',
        country: 'Lietuva',
      },
      touristAttractions: ['Gedimino pilies bokstas', 'Vilniaus katedra'],
      isCapital: true,
    },
    {
      name: 'New York',
      population: 8500000,
      location: {
        continent: 'North America',
        country: 'United States',
      },
      touristAttractions: [],
      isCapital: false,
    },
    {
      name: 'Tokyo',
      population: 14000000,
      location: {
        continent: 'Asia',
        country: 'Japan',
      },
      touristAttractions: ['Sensō-ji'],
      isCapital: true,
    },
    {
      name: 'Amsterdam',
      population: 1400000,
      location: {
        continent: 'Europe',
        country: 'Netherlands',
      },
      touristAttractions: ['Van gogh museum', 'Rijksmuseum', 'Anne Frank museum'],
      isCapital: true,
    },
    {
      name: 'Monaco',
      population: 40000,
      location: {
        continent: 'Europe',
        country: 'Monaco',
      },
      touristAttractions: [],
      isCapital: true,
    },
    {
      name: 'Havana',
      population: 2400000,
      location: {
        continent: 'North America',
        country: 'Cuba',
      },
      touristAttractions: ['National Capitol of Cuba', 'Plaza de la Catedral'],
      isCapital: true,
    },
    {
      name: 'Singapore',
      population: 5600000,
      location: {
        continent: 'Asia',
        country: 'Singapore',
      },
      touristAttractions: ['Marina Bay Sands', 'Gardens by the Bay', 'Singapore Zoo'],
      isCapital: true,
    },
    {
      name: 'Melbourne',
      population: 5000000,
      location: {
        continent: 'Australia',
        country: 'Australia',
      },
      touristAttractions: ['Melbourne Skydeck'],
      isCapital: false,
    },
    {
      name: 'Sapporo',
      population: 1900000,
      location: {
        continent: 'Asia',
        country: 'Japan',
      },
      touristAttractions: ['Hokkaido Jingu'],
      isCapital: false,
    },
  ];

  const [cities, setCities] = useState(citiesData);

  const oddClass = cities.length % 2 !== 0 ? 'odd' : '';

  return (
    <Container>
      <main>
        <div className={`cities-wrapper ${oddClass}`}>
          {
            cities.map((city, index) => <CityItem data={city} key={index} />)
          }
        </div>
      </main>
    </Container>
  )
}

export default CitiesPage