import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import { OdontologosContext } from '../context/OdontologosContext';

const Home = () => {
  const { odontologos, getOdontologos, addFavorito } = useContext(OdontologosContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOdontologos()
      .then(() => setLoading(false))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {loading ? (
        <p>Cargando odontólogos...</p>
      ) : (
        <div>
          {odontologos.map(odontologo => (
            <Card
              key={odontologo.id}
              name={odontologo.name}
              username={odontologo.username}
              id={odontologo.id}
              onClick={() => addFavorito(odontologo)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;


