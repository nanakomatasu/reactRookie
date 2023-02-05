const Edit = () => {
  return <div className="edit">
    <div className="uname" name="uname">
    <p>时间</p>
    <input type="date" />
    </div>
    <div className="utime">
    <p>邮箱</p>
    <input type="time" name="utime"/>
    </div >
    <div className="textarea">
    <p>事件</p>
     <input type="text" name="jishi"/>
    </div>
    <div className="add">
      <button >新增</button>
    </div>
     </div>
};

export default Edit;
