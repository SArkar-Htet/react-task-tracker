import { FaTimes } from 'react-icons/fa';

const Task = ({task, onDelete}) => {
  return (
    <div className={`task ${task.reminder && "reminder"}`}>
      <div className="task__header">
        <h2 className="task__title">{task.text}</h2>
        <FaTimes className='text-danger' onClick={() => onDelete(task.id)} />
      </div>
      <div className="task__body">
        <p className="task__time-stamp">{task.time}</p>
      </div>
    </div>
  )
}

export default Task
