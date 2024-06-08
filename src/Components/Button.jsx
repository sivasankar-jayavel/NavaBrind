import "../CSS/Button.css";

const Button = ({ symbol, color, handleClick,darkMode  }) => {
  const buttonClass = darkMode ? "button-wrapper dark" : "button-wrapper light";
  


  return (
    <div
    className={buttonClass}
      onClick={() => handleClick(symbol)}
      style={{ backgroundColor: color }}
    >
      {symbol}
    </div>
  );
};

export default Button;