import Item from "./item";

const List = ({lista},{deleteItem}) => {
  return (
    <div className="list">
          {
            lista.map(item => {
              const {date,time,text,id,key} = item
              return <Item date={date} time={time} text={text} id={id} key={id}/>
            })
          }
   </div>
  );
};
export default List;
