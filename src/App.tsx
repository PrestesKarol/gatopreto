import React from 'react';
import ItemList from './components/itemList';
import Header from './components/header';
import { Hero } from './components/hero';
import { Benefits } from './components/benefits';
import CartWidget from './components/cartWidget';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header>
        <CartWidget />
      </Header>
      <Benefits />
      <Hero />
      <ItemList /> {}
    </div>
  );
}

export default App;
