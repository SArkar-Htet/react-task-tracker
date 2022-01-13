import Button from './Button';
import '../styles/header.css';
const Header = ({showAdd, handleToggle}) => {
  return (
    <div className="header">
      <h1>Task Tracker</h1>
      <Button color={showAdd ? "#ff0000" : "#008000"} text={showAdd ? "Close" : "Add Task"} handleToggle={handleToggle} />
    </div>
  )
}

export default Header
