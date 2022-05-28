import "./styles.css";
import { useState } from "react";
import Circle from "./Circle";

export default function App() {
  const [arr1, setArr1] = useState([]);
  const [arr2, setArr2] = useState([0, 1, 2, 3, 4, 5]);
  const colors = ["yellow", "black", "red", "orange", "purple", "green"];
  const handleclick = (e) => {
    const id = document.getElementById("user_input").value;
    if (id > 5 || id < 0)
      alert("please enter the value between 0 to 5");
    else if (arr1.includes(id))
      alert("This box is already available in the div");
    else
      setArr1([...arr1, id]);
    const temp_arr = arr2.filter((item) => item != id);
    setArr2(temp_arr);
  };

  const handledelete = (id) => {
    setArr1(arr1.filter((item) => item != id));
    const temp = [...arr2, id];
    setArr2(temp.sort());
  }
  return (
    <div className="App">
      <h1>Hello syngenta</h1>
      <h2>Welcome to the assignment of syngenta!</h2>
      <input
        id="user_input"
        type="text"
        placeholder="Enter the number  from 0 to 5"
      />
      <button onClick={handleclick}>Shoot</button>

      <div className="main_div">
        <div className="div1">
          {arr1.map((id) => {
            return <Circle colo={colors[id]} id={id} handledelete={handledelete} />;
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
