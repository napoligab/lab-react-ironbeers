import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function RandomBeer() {
  const [beer, setBeer] = useState(null);

  const getBeer = async () => {
    try {
      let response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      setBeer(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeer();
  }, []);

  return (
    <div>
      {beer && (
        <div key={beer._id}>
          <figure className="flex justify-center">
            <img src={beer.image_url} alt="beer" />
          </figure>
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p>Created by: {beer.contributed_by}</p>
          <p>First brewed: {beer.first_brewed}</p>
          <p>Attenuation level: {beer.attenuation_level}</p>
          <p>{beer.description}</p>
        </div>
      )}

      <Link to="/">
        <button className="btn">Go back</button>
      </Link>
    </div>
  );
}

export default RandomBeer;
