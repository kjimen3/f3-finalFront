import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Contacto from './components/Contacto';
import Detalle from './components/Detalle';
import Destacados from './components/Destacados';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contacto} />
        <Route exact path="/dentist/:id" component={Detalle} />
        <Route exact path="/favs" component={Destacados} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;

