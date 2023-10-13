import ItemList from '../itemList';

const ItemListContainer = () => {
  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ItemList /> {/* Renderize o componente ItemList aqui */}
    </div>
  );
};

export default ItemListContainer;