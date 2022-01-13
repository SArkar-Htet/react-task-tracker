import Task from './Task';
import '../styles/task.css';

const Tasks = ({ tasks }) => {
  return (
    <div className="task-container">
      { tasks.map(task => <Task task={task} />) }
    </div>
  )
}

export default Tasks
