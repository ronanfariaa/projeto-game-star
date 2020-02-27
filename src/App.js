import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Jogo from './components/Jogo/Jogo';
import MenuSuperior from './components/MenuSuperior/MenuSuperior';
import Nave from './components/Nave/Nave';
import Personagem from './components/Personagem/Personagem';

class App extends Component {
  render() {
    return (
      <div class="">

        <MenuSuperior />

        <Route path="/" exact component={Jogo} />
        <Route path="/Personagem" component={Personagem} />
        <Route path="/Nave" component={Nave} />
      </div>
    );
  }
}

export default App;
