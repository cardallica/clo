import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/HomePage';
import Who from './components/Who';
import What from './components/What';
import Psychiatrist from './components/Psychiatrist';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

import {
  HashRouter as Router,
  Route,
} from 'react-router-dom'

require('./App.css');

class App extends Component {
  render() {
    return (
      <Router >
        <div className='app'>
            <Header />
            <main>
              <Route exact path="/" component={Home}/>
              <Route path="/chi-sono" component={Who}/>
              <Route path="/cosa-faccio" component={What}/>
              <Route path="/psicologo" component={Psychiatrist}/>
              <Route path="/contatti" component={Contacts}/>
            </main>
            <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
