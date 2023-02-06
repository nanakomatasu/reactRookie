
const Item =({date,time,text}) => {
  return <div className="item">
           <div><span>{text}</span><span>{date}{time}</span></div>
    <button className="remove">删除</button>
    </div>
}

export default Item