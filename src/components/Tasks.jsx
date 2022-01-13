import Task from './Task';
import '../styles/task.css';

const Tasks = ({ tasks, onDelete }) => {
  return (
    <div className="task-container">
      { tasks.map(task => <Task key={task.id} task={task} onDelete={onDelete} />) }
    </div>
  )
}

export default Tasks
