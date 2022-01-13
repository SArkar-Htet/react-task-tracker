import React, { useState } from 'react';

const AddTaskForm = ({onAddTask}) => {
  const [task, setTask] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [reminder, setReminder] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) {
      alert("Please add task");
      return;
    }
    onAddTask({text: task, time: dateTime, reminder});
    setTask("");
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
          name='task'
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
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
          checked={reminder}
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
