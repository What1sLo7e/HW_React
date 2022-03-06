import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import ToDoLists2 from './components2/ToDoLists2'
import ToDoTasks2 from './components2/ToDoTasks2'

function App() {
  return (
    <section className='container'>
      <h1 className='text-center'>ToDo Manager</h1>

      <div className='row'>
        <div className='col-md-4'>
            <ToDoLists2/>
            
        </div>
        <div className='col-md-8'>
            <ToDoTasks2/>
        </div>
      </div>
    </section>
  );
}

export default App;
