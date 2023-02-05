import XI from "../page/xiang.jsx";
import Edit from "../page/edit"
import "./home.css";

const Home = () => {
  return (
    <div className="main">
      <h1>备忘录</h1>
      <Edit />
      <XI />
    </div>
  );
}
export default Home;
