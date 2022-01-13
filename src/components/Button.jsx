const Button = ({ color, text, onShowAddTask }) => {
  return (
    <button 
      className="btn" 
      style={{ backgroundColor:color }} 
      onClick={onShowAddTask}>
      {text}
    </button>
  )
}

export default Button
