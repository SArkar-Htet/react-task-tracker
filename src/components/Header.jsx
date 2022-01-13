import Button from './Button';
import '../styles/header.css';
const Header = () => {
  return (
    <div className="header">
      <h1>Task Tracker</h1>
      <Button color="#008000" text="Add Task" />
    </div>
  )
}

export default Header
