const AddTaskForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form action="" className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input type="text" placeholder="Add Task" id="task" />
      </div>
      <div className="form-control">
        <label htmlFor="date-time">Day & Time</label>
        <input type="text" placeholder="Add Day & Time" id="date-time" />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="reminder">Set Reminder</label>
        <input type="checkbox" id="reminder" />
      </div>
      <button className="btn btn-block">Save Task</button>
    </form>
  )
}

export default AddTaskForm
