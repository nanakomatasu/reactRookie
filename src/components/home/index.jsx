import { ReactDOM } from "react";
import Edit from "../page/edit"
import List from "../page/list.jsx";
import "./home.css";

const Home = () => {
  return (
    <div className="main">
      <h1>备忘录</h1>
      <Edit />
      <List />
    </div>
  );
}
export default Home;
