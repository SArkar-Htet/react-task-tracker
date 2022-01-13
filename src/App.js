import React, { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
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
  )
  return (
    <div className='container'>
      <header>
        <Header />
      </header>
      <main>
        <Tasks tasks={tasks} />
      </main>
    </div>
  )
}

export default App
