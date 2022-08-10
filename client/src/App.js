import './App.css';
import React, { Fragment } from 'react'
import { Route } from 'react-router-dom';
import ladingpage from './components/LadingPage/ladingpage';
import footer from './components/Footer/footer';
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <div className="App">
      <Fragment>
        <Route exact path='/' component={ladingpage} />
        <Route exact path='/' component={footer} />
        <Route path='/results' component={Navbar} />
        <Route path='/home' component={Navbar} />
        <Route path='/videogames' component={Navbar} />
        <Route path='/create' component={Navbar} />
      </Fragment>
    </div>
  );
}

export default App;
