import {useState } from "react";
import "./App.css";
import Input from "./Components/Input";
import Button from "./Components/Button";

// import * as math from "mathjs";

const App = () => {

  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [darkMode, setDarkMode] = useState(false);


  const toggleTheme = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  const addToText = (val) => {
    setText((text) => [...text, val + ""]);
  };

  const resetInput = () => {
    setText("");
    setResult("");
  };

  const deleteInput = () => {
    setText((text.slice(0, -1)));
  }

  const buttonColor = "#f2a33c";

  const calculateResult = () => {

    const input = text.join(""); // Remove commas
    // setResult(math.evaluate(input));

    try {
      const enteredInput = input.replace(/[^-()\d/*+.]/g, ""); 
      const calculatedResult = new Function(`return ${enteredInput}`)(); // Evaluate the expression
      setResult(formatNumber(calculatedResult));
    } catch (error) {
      setResult("Error");
    }
    
  };

  // Function to format the number with commas
  const formatNumber = (number) => {
    return number.toLocaleString();
  };

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`} >
      <div className={`calc-wrapper ${darkMode ? "dark" : "light"}`}>
        <div className="result-wrapper">
          <button className="toggle-button" onClick={toggleTheme}>
            {darkMode ? "🌞 Light" : "🌜 Dark"}
          </button>
          <Input text={text} result={result} darkMode={darkMode}/>
        </div>
        <div className="row">
          <Button symbol="AC" color="red" handleClick={resetInput}  darkMode={darkMode}/>
          <Button symbol="=" color="red" handleClick={calculateResult} darkMode={darkMode}/>
        </div>
        <div className="row">
          <Button symbol="7" handleClick={addToText} darkMode={darkMode}/>
          <Button symbol="8" handleClick={addToText} darkMode={darkMode}/>
          <Button symbol="9" handleClick={addToText} darkMode={darkMode}/>
          <Button symbol="*" color={buttonColor} handleClick={addToText} darkMode={darkMode}/>
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addToText} darkMode={darkMode}/>
          <Button symbol="5" handleClick={addToText} darkMode={darkMode}/>
          <Button symbol="6" handleClick={addToText} darkMode={darkMode}/>
          <Button symbol="/" color={buttonColor} handleClick={addToText} darkMode={darkMode}/>
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToText} darkMode={darkMode}/>
          <Button symbol="2" handleClick={addToText} darkMode={darkMode}/>
          <Button symbol="3" handleClick={addToText} darkMode={darkMode}/>
          <Button symbol="+" color={buttonColor} handleClick={addToText} darkMode={darkMode}/>
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addToText} darkMode={darkMode}/>
          <Button symbol="00" handleClick={addToText} darkMode={darkMode}/>
          <Button symbol="." handleClick={addToText} darkMode={darkMode}/>
          <Button symbol="-" color={buttonColor} handleClick={addToText} darkMode={darkMode}/>
        </div>
        <div className="row">
          <Button symbol="(" handleClick={addToText} darkMode={darkMode}/>
          <Button symbol=")" handleClick={addToText} darkMode={darkMode}/>
          <Button symbol="," handleClick={addToText} darkMode={darkMode}/>
          <Button symbol="DEL" color="red" handleClick={deleteInput} darkMode={darkMode}/>
        </div>
      </div>
    </div>
  );
};


export default App;