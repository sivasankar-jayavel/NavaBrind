import { useEffect, useState } from "react";

import * as math from "mathjs";

import "./App.css";
import Input from "./Components/Input";
import Button from "./Components/Button";

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

  const calculateResult = () => {
    const input = text.join(""); // Remove commas

    setResult(math.evaluate(input));
  };

  const resetInput = () => {
    setText("");
    setResult("");
  };

  const deleteInput = () => {
    setText((text.slice(0, -1)));
  }

  const buttonColor = "#f2a33c";

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`} style={{ backgroundColor: darkMode ? "black" : "white" }}>
      <div className={`calc-wrapper ${darkMode ? "dark" : "light"}`}>
        <div className="result-wrapper">
          <button className="toggle-button" onClick={toggleTheme}>
            {darkMode ? "🌞 Light" : "🌜 Dark"}
          </button>
          <Input text={text} result={result} />
        </div>
        <div className="row">
          <Button symbol="AC" color="red" handleClick={resetInput} />
          <Button symbol="=" color="red" handleClick={calculateResult} />
        </div>
        <div className="row">
          <Button symbol="7" handleClick={addToText} />
          <Button symbol="8" handleClick={addToText} />
          <Button symbol="9" handleClick={addToText} />
          <Button symbol="*" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addToText} />
          <Button symbol="5" handleClick={addToText} />
          <Button symbol="6" handleClick={addToText} />
          <Button symbol="/" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToText} />
          <Button symbol="2" handleClick={addToText} />
          <Button symbol="3" handleClick={addToText} />
          <Button symbol="+" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addToText} />
          <Button symbol="00" handleClick={addToText} />
          <Button symbol="." handleClick={addToText} />
          <Button symbol="-" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="(" handleClick={addToText} />
          <Button symbol=")" handleClick={addToText} />
          <Button symbol="," handleClick={addToText} />
          <Button symbol="DEL" color="red" handleClick={deleteInput} />
        </div>
      </div>
    </div>
  );
};


export default App;