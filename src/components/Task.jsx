import { FaTimes } from 'react-icons/fa';

const Task = ({task, onDelete, onReminder}) => {
  return (
    <div className={`task ${task.reminder && "reminder"}`}>
      <div className="task__header">
        <h2 className="task__title">{task.text}</h2>
        <FaTimes 
          className='text-danger clickable' 
          onClick={() => onDelete(task.id)} 
          title='Delete' 
        />
      </div>
      <div className="task__body">
        <p className="task__time-stamp">{task.time}</p>
        <input 
          type="checkbox" 
          name="set-reminder" 
          id="set-reminder" 
          className="set__reminder clickable" 
          title="Set Reminder" 
          checked={task.reminder} 
          onChange={() => onReminder(task.id)} 
        />
      </div>
    </div>
  )
}

export default Task
