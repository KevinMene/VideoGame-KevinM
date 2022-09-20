import React from 'react'
import { Route } from 'react-router-dom';
import Landingpage from './components/LadingPage/ladingpage';
import Videogames from './components/Videogames/Videogames';
import CrearJuego from './components/crearjuego/CrearJuego';
import GameDetails from './components/GameDetail/GameDetails';
import About from './components/About/About';
import Page404 from './components/Page404/page404';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Landingpage} />
      <Route exact path='/videogames' component={Videogames}/>
      <Route exact path='/crearjuego' component={CrearJuego} />
      <Route exact path='/videogame/:idVideogame' component={GameDetails} />
      <Route exact path='/about' component={About} />
      <Route path='*' component={Page404} />
    </div>
  );
}

export default App;
