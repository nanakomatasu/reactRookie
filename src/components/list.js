import Item from "./item";
const arr = [1, 2, 3, 4, 5, 6];

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
