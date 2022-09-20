import './App.css';
import React, { Fragment } from 'react'
import { Route } from 'react-router-dom';
import ladingpage from './components/LadingPage/ladingpage.jsx';
import footer from './components/Footer/footer.jsx';
import Navbar from './components/Navbar/navbar.jsx';
import GameDetail from './containers/detailgame/gamedetail.jsx';
import Create from './containers/create/create.jsx';
import Search from './containers/Search/searchs.jsx';
import Home from './containers/Home/Home.jsx';

function App() {
  return (
    <div className="App">
      <Fragment>
        <Route path='/results' component={Navbar} />
        <Route path='/home' component={Navbar} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/' component={ladingpage} />
        <Route exact path='results/:name' component={Search} />
        <Route exact path='/videogames/:id' render={({ match }) => <GameDetail id={match.params.id} />} />
        <Route path='/create' component={Navbar} />
        <Route exact path='/create' component={Create} />
        <Route exact path='/' component={footer} />
        <Route exact path='/results' component={footer} />
        <Route exact path='/home' component={footer} />
        <Route exact path='/videogames' component={footer} />
        <Route exact path='/create' component={footer} />
        <Route exact path='/results/:name' component={footer} />
        <Route path='/videogames' component={Navbar} />
      </Fragment>
    </div>
  );
}

export default App;
