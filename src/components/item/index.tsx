
type ItemProps = {
  item: {
    id: number;
    title: string;
    description: string;
    price: number;
    pictureUrl: string;
  };
};

function Item({ item }: ItemProps) {
  return (
    <div className="item">
      <img src={item.pictureUrl} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Price: ${item.price.toFixed(2)}</p>
    </div>
  );
}

export default Item;