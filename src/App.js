import "./styles.css";
import { useState } from "react";
import Circle from "./Circle";

export default function App() {
  const [arr1, setArr1] = useState([]);
  const [arr2, setArr2] = useState([0, 1, 2, 3, 4, 5]);
  const colors = ["yellow", "black", "red", "orange", "purple", "green"];
  const handleclick = (e) => {
    const id = document.getElementById("user_input").value;
    console.log(id, typeof id);
    setArr1([...arr1, id]);
    const temp_arr = arr2.filter((item) => item != id);
    setArr2(temp_arr);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        id="user_input"
        type="text"
        placeholder="Enter the number between from 0 to 5"
      />
      <button onClick={handleclick}>Shoot</button>

      <div className="main_div">
        <div className="div1">
          {arr1.map((id) => {
            return <Circle colo={colors[id]} id={id} />;
          })}
        </div>
        <div className="div2">
          {arr2.map((index) => (
            <Circle colo={colors[index]} id={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
