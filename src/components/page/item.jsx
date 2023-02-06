
const Item =({key,id,date,time,text,deletItem}) => {
  function deleteI(){
       deletItem(function(prev){
        return prev.filter(item => item.id !== id)
       })
  }
  return <div className="item">
           <div><p>{text}</p>   <p>{date}{time}</p></div>
    <button onClick={deleteI} className="remove">删除</button>
    </div>
}

export default Item