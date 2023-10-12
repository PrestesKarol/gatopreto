import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemList from './components/itemList';
import Header from './components/header';
import { Hero } from './components/hero';
import { Benefits } from './components/benefits';
import CartWidget from './components/cartWidget';
import ProductDetail from './components/itemDetailContainer/productDetail';
import imagem1 from './components/itemList/itemListImagens/cookies.png';
import imagem2 from './components/itemList/itemListImagens/cupcake_baunilha.png';
import imagem3 from './components/itemList/itemListImagens/macarrons.png';
import imagem4 from './components/itemList/itemListImagens/cupcake_chocolate.png';

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  pictureUrl: string;
  isConfigurable: boolean;
};

const products: Product[] = [
  {
    id: 1,
    title: 'Cookies - Bolinha de Pelo',
    description:
      'Cream cheese, açúcar demerara, ovo, cacau, farinha de aveia, chocolate amargo nobre, leite condensado, creme de leite.',
    price: 13.99,
    pictureUrl: imagem1,
    isConfigurable: true,
  },
  {
    id: 2,
    title: 'CupCake - Gatinho Feliz',
    description: 'Feito com mix de farinhas sem glúten, massa de baunilha e coberto com um delicioso chantily.',
    price: 24.99,
    pictureUrl: imagem2,
    isConfigurable: false,
  },
  {
    id: 3,
    title: 'Macarons - Arco-Íris',
    description: 'Feitos com maestria, esses docinhos são uma celebração de aromas e texturas que se combinam em uma experiência única.',
    price: 29.99,
    pictureUrl: imagem3,
    isConfigurable: true,
  },
  {
    id: 4,
    title: 'Cupcake - Gatinho Dorminhoco',
    description: 'Feito com mix de farinhas sem glúten, massa de chocolate 100% cacau e coberto com um delicioso brigadeiro.',
    price: 24.99,
    pictureUrl: imagem4,
    isConfigurable: false,
  },
];

function App() {
  return (
    <div className="App">
      <Router>
        {/* Inclua a barra de navegação, como o Header, aqui */}
        <Header>
          <CartWidget />
        </Header>
        <Benefits />
        <Hero />

        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/product/:id" element={<ProductDetail products={products} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
