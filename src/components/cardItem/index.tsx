import './styles.css';

type ItemType = {
    id: number;
    title: string;
    description: string;
    price: number;
    pictureUrl: string;
  };

type CardItemProps = {
    item: ItemType; // Defina o tipo da prop "item"
  };
  
  const CardItem: React.FC<CardItemProps> = ({ item }) => {
    return (
      <div className="card">
        <img src={item.pictureUrl} alt={item.title} />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p>Price: ${item.price.toFixed(2)}</p>
      </div>
    );
  };
  
  export default CardItem;