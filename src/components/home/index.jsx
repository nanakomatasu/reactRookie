import { ReactDOM, useState } from "react";
import Edit from "../page/edit";
import List from "../page/list";
import "./home.css";

const Home = () => {
  const [a,setA] = useState([])
  
  return (
    <div className="main">
      <h1>备忘录</h1>
      <Edit add = {setA}/>
      <List  lista={a} deletItem={setA}/>
    </div>
  );
}
export default Home;
