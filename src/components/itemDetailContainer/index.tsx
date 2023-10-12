import React, { useState, useEffect } from 'react';
import ItemDetail from './itemdetail';

const getItem = () => {
  return new Promise<{ id: number; title: string; description: string; price: number; pictureUrl: string }>((resolve) => {
    setTimeout(() => {
      const mockItem = {
        id: 1,
        title: 'Produto Detalhado',
        description: 'Esta é a descrição detalhada do produto.',
        price: 49.99,
        pictureUrl: '/imagens/produto_detalhado.jpg',
      };
      resolve(mockItem);
    }, 2000);
  });
};

function ItemDetailContainer() {
  const [item, setItem] = useState<{ id: number; title: string; description: string; price: number; pictureUrl: string } | null>(null);

  useEffect(() => {
    getItem().then((data) => setItem(data));
  }, []);

  return (
    <div className="item-detail-container">
      {item ? <ItemDetail item={item} /> : <p>Carregando...</p>}
    </div>
  );
}

export default ItemDetailContainer;


