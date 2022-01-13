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

  const handleShowAddTask = () => {
    setShowAdd(!showAdd);
  }

  return (
    <div className='container'>
      <header>
        <Header showAdd={showAdd} onShowAddTask={handleShowAddTask} />
        {showAdd && 
          <div className="header__toggler">
            <AddTaskForm />
          </div>}
      </header>
      <main>
        <Tasks tasks={tasks} />
      </main>
    </div>
  )
}

export default App
