import { useState } from "react";
import Item from './item'
import { v4 } from "uuid";

const Edit = ({add}) => {
  
  const [date,setDate] = useState('')
  function changeDate(e){
        setDate(e.target.value)
  }
  const [time,setTime] = useState('')
  function changeTime(e){
    setTime(e.target.value)
  }

  const [text,setText] = useState('')
  function changeText(e){
    setText(e.target.value)
  }
  function addItem(){
    add(function(prevData){
      return [...prevData,{
        id:v4(),date,time,text
      }]
    })
   }
  return <div className="edit">
     <div className="date" name="date">
    <p>日期</p>
    <input type="date"  name='date' value={date} onChange={changeDate}/>
    </div>
    <div className="time">
    <p>时间</p>
    <input type="time" name="time" value={time} onChange={changeTime}/>
    </div >
    <div className="textarea">
    <p>事件</p>
     <input type="text" name="jishi" value={text} onChange={changeText}/>
    </div>
    <div className="add">
      <button onClick={addItem}>新增</button>
      </div>
   </div>
};

export default Edit;
