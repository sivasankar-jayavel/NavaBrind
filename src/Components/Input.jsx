import "../CSS/Input.css";

const Input = ({ text, result ,darkMode }) => {
  const inputClass = darkMode ? "input-wrapper dark" : "input-wrapper light";
  return (
    <div className={inputClass}>
    <div className="input">
      {text}
    </div>
    <div className="result">
      {result}
    </div>
  </div>
  );
};

export default Input;