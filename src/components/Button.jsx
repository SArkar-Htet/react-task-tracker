const Button = ({ color, text, handleToggle }) => {
  return (
    <button 
      className="btn" 
      style={{ backgroundColor:color }} 
      onClick={handleToggle}>
      {text}
    </button>
  )
}

export default Button
