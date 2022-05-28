import "./styles.css";
import { useState } from "react";
import Circle from "./Circle";

// function to generate random color.
function generateRandomColor() {
  let maxVal = 0xFFFFFF; // 16777215
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`
}

// array which will store the random generated colors.
const colors = [];

export default function App() {
  const [arr1, setArr1] = useState([]);
  const [arr2, setArr2] = useState([0, 1, 2, 3, 4, 5]);

  // function to handle when user hit the shoot button
  const handleclick = () => {
    const id = parseInt(document.getElementById("user_input").value);
    if(isNaN(id))
    {
      alert("Please enter some numeric value before hitting the button");
      document.getElementById("user_input").value = "";
      return;
    }
    
    if (id > 5 || id < 0)
      alert("please enter the value between 0 to 5");
    else if (arr1.includes(id))
      alert("This box is already available in the div");
    else
      setArr1([...arr1, id].sort());
    const temp_arr = arr2.filter((item) => item !==id);
    setArr2(temp_arr);
    document.getElementById("user_input").value="";
  };

  // function to handle when user remove some circle from left div.
  const handledelete = (id) => {
    setArr1(arr1.filter((item) => item !== id));
    const temp = [...arr2, id];
    setArr2(temp.sort());
  }

  // function to add random color to the circle.
  for (let i = 0; i < 6; i++) {
    while (true) {
      const color = generateRandomColor();
      if (colors.includes(color)) continue;
      colors.push(color);
      break;
    }
  }


  return (
    <div className="App">
      <h1>Hello syngenta</h1>
      <h2>Welcome to the assignment of syngenta!</h2>
      <input
        id="user_input"
        type="text"
        placeholder="Enter the number from 0 to 5"
        
      />
      <button onClick={handleclick}>Shoot</button>

      <div className="main_div">
        {/* first div that holds all the clicked circle */}
        <div className="div1">
          {arr1.map((id) => {
            return <Circle key={id} colo={colors[id]} id={id} handledelete={handledelete} />;
          })}
        </div>
        {/* second div which holds all the available circle. */}
        <div className="div2">
          {arr2.map((index) => {
            return <Circle key={index} colo={colors[index]} id={index} handledelete={() => { }}/>
          })}
        </div>
      </div>
    </div>
  );
}
