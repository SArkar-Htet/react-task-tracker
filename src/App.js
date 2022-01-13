import React, { useState } from 'react'
import AddTaskForm from './components/AddTaskForm';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  const [ showAdd, setShowAdd ] = useState(false);
  const [ tasks, setTasks ] = useState(
    [
      {
        id: 1,
        text: "Doctor's Appointment",
        time: "March 1st at 2:30pm",
        reminder: true,
      },
      {
        id: 2,
        text: "Meeting at school",
        time: "March 3rd at 1:30pm",
        reminder: true,
      },
      {
        id: 3,
        text: "Food Shopping",
        time: "March 5th at 11:00am",
        reminder: false,
      },
    ]
  );

  const handleToggle = () => {
    setShowAdd(!showAdd);
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task}
    setTasks([...tasks, newTask]);
  }

  const handleDelete = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }

  const toggleReminder = (id) => {
    const newTasks = tasks.map(task => (
      task.id === id ? {...task, reminder: !task.reminder} : {...task})
    );
    setTasks(newTasks);
  }

  return (
    <div className='container'>
      <header>
        <Header showAdd={showAdd} handleToggle={handleToggle} />
        {showAdd && 
          <div className="header__toggler">
            <AddTaskForm onAddTask={addTask} />
          </div>}
      </header>
      <main>
        <Tasks tasks={tasks} onDelete={handleDelete} onReminder={toggleReminder} />
      </main>
    </div>
  )
}

export default App
