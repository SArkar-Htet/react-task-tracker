const Task = ({task}) => {
  return (
    <div className="task">
      <div className="task__header">
        <h2 className="task__title">{task.text}</h2>
      </div>
      <div className="task__body">
        <p className="task__time-stamp">{task.time}</p>
      </div>
    </div>
  )
}

export default Task
