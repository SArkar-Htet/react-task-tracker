import Button from './Button';
import '../styles/header.css';
const Header = ({showAdd, onShowAddTask}) => {
  return (
    <div className="header">
      <h1>Task Tracker</h1>
      <Button color={showAdd ? "#ff0000" : "#008000"} text={showAdd ? "Close" : "Add Task"} onShowAddTask={onShowAddTask} />
    </div>
  )
}

export default Header
