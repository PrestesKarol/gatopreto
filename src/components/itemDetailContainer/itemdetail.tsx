import React from 'react';

type ItemDetailProps = {
  item: {
    id: number;
    title: string;
    description: string;
    price: number;
    pictureUrl: string;
  };
};

const ItemDetail: React.FC<ItemDetailProps> = ({ item }) => {
  return (
    <div>
      <img src={item.pictureUrl} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Price: ${item.price.toFixed(2)}</p>
    </div>
  );
};

export default ItemDetail;