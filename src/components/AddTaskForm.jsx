import React, { useState } from 'react';

const AddTaskForm = () => {
  const [taskName, setTaskName] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [reminder, setReminder] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName) {
      alert("Please add task");
    }
    setTaskName("");
    setDateTime("");
    setReminder(false);
  }

  return (
    <form action="" className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input 
          type="text" 
          placeholder="Add Task" 
          id="task" 
          name='taskName'
          value={taskName} 
          onChange={(e) => setTaskName(e.target.value)} 
        />
      </div>
      <div className="form-control">
        <label htmlFor="date-time">Day & Time</label>
        <input
          type="text" 
          placeholder="Add Day & Time" 
          id="date-time" 
          name='dateTime'
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)} 
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="reminder">Set Reminder</label>
        <input 
          type="checkbox" 
          name='reminder'
          id="reminder"
          value={reminder}
          onChange={(e) => setReminder(e.target.checked)} 
        />
      </div>
      <button 
        className="btn btn-block"
      >Save Task</button>
    </form>
  )
}

export default AddTaskForm
