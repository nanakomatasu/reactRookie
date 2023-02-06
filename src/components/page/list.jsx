import Item from "./item";

const List = ({lista}) => {
  return (
    <div className="list">
          {
            lista.map(item => <Item key={item.id}/>)
          }
   </div>
  );
};
export default List;
