import "./index.css";
import { useState } from "react";
import Circle from "./Circle";

export default function App() {
  const [arr, setArr] = useState([]);
  const colors = ["yellow", "black", "red"];
  const handleclick = (e) => {
    console.log(e.target.id);
    setArr([...arr, e.target.id]);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="main_div">
        <div className="div1">
          {arr.map((id) => {
            return <Circle colo={colors[id]} id={id} />
          })}
        </div>
        <div className="div2">
          {colors.map((color, index) => (
            <Circle colo={color} id={index} handleclick={handleclick} />
          ))}
        </div>
      </div>
    </div>
  );
}
