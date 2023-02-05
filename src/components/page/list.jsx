import Item from "./item";
const arr = ['1','1','1','1','1','1','1','1'];

const List = () => {
  return (
    <div>
      {arr.map((item) => (
        <ul>{item}</ul>
      ))}
    </div>
  );
};
export default List;
