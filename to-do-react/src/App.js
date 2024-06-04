// import logo from './logo.svg';
import './App.css';
import ListElement from './listElement';
import React, { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState('');

    const getTasks =  async ()  =>{
      await fetch('http://localhost:4000/api/todos')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error(error));
    } 
  useEffect(() => {
    getTasks();
  }, []);
  console.log(tasks);

  const updateTask =  async (id,done)  =>{
    await fetch(`http://localhost:4000/api/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id: id, done: done}),
      }
    )
    .then(response => response.json())
    .then(data => setTasks(data))
    .catch(error => console.error(error));
  } 

  const deleteTask =  async (id)  =>{
    await fetch(`http://localhost:4000/api/todos/${id}`, {
      method: 'DELETE',
      }
    )
    .then(response => response.json())
    .then(data => setTasks(data))
    .catch(error => console.error(error));
  } 

  const addTask =  async (text)  =>{
    await fetch(`http://localhost:4000/api/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({text: text}),
      }
    )
    .then(response => response.json())
    .then(data =>{ setTasks(data);
      setNewTask('');
    })
    .catch(error => console.error(error));
  }
  

  return (
    <section className="section pt-14 bg-gray-300 min-h-screen">
      <div className="flex flex-col items-center">
          <p className='text-3xl font-bold underline'>
            ToDo List
          </p>
          <ul className='self-start pl-10 w-full'>
            {tasks.map(task => (
              <ListElement key={task.id}
              id={task.id}
              text={task.text}
              done={task.done}
              onChange={updateTask}
              onDelete={deleteTask} />
            ))}
          </ul>
          <div>
            <input type='text' value={newTask} className='border-2 border-gray-400 border-opacity-50 rounded-lg p-1 mt-4' onChange={(e) =>setNewTask(e.target.value)}/>
            <button className='border-2 border-gray-400 rounded-lg p-1 ml-2' onClick={() => addTask(newTask)}>
              Add
            </button>
          </div>
      </div>
    </section>
  );
}
export default App;
