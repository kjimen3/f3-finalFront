import React from "react";


const Card = ({ name, username, id }) => {

  const addFav = (odontologo) => {
    const favoritos = localStorage.getItem('favoritos') || '[]';
    const favoritosArray = JSON.parse(favoritos);
    favoritosArray.push(odontologo);
    localStorage.setItem('favoritos', JSON.stringify(favoritosArray));
  };
  return (
    <Router>
      <div className={`App ${tema}`}>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Home odontologos={odontologos} agregarFavorito={agregarFavorito} />} />
          <Route exact path="/contacto" component={Contacto} />
          <Route exact path="/dentist/:id" component={Detalle} />
          <Route exact path="/favs" render={() => <Destacados odontologos={odontologos} eliminarFavorito={eliminarFavorito} />} />
        </Switch>
        <Footer tema={tema} cambiarTema={cambiarTema} />
      </div>
    </Router>
  );
};

export default Card;
