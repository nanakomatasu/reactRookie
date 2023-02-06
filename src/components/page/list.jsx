import Item from "./item";

const List = ({lista,deletItem}) => {
  return (
    <div className="list">
          {
            lista.map(item => {
              const {date,time,text,id,key} = item
              return <Item date={date} time={time} text={text} id={id} key={id} deletItem={deletItem}/>
            })
          }
   </div>
  );
};
export default List;
