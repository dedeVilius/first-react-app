import { useState } from "react";

const TodoListForm = ({ onAddTask }) => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [date, setDate] = useState('');

  const nameHandler = (e) => setName(e.target.value);
  const descriptionHandler = (e) => setDescription(e.target.value);
  const statusHandler = (e) => setStatus(e.target.checked);
  const dateHandler = (e) => setDate(e.target.value);


  const submitTaskHandler = (e) => {
    e.preventDefault();

    const newTask = { name: name, description: description, status: status, date: date }
    
    onAddTask(newTask);
  }

  return (
    <div className='todo-list-form-wrapper'>
      <button hidden>Add a task</button>
      <div className="todo-list-form">
        <form onSubmit={submitTaskHandler}>
          <div className='form-control'>
            <label htmlFor='todo-list-name'>Task name: </label>
            <input type='text' id='todo-list-name' name='name' className='width-250' value={name} onChange={nameHandler}></input>
          </div>
          <div className='form-control'>
            <label htmlFor='todo-list-description'>Task description: </label>
            <textarea id='todo-list-description' name='description' className='width-250' onChange={descriptionHandler}></textarea>
          </div>
          <div className='form-control'>
            <label htmlFor='todo-list-status'>Completed: </label>
            <input type='checkbox' id='todo-list-status' name='status' onChange={statusHandler}/>
          </div>
          <div className='form-control'>
            <label htmlFor='todo-list-date'>Finish date: </label>
            <input type='date' id='todo-list-date' name='date' className='width-250' onChange={dateHandler} />
          </div>
          <div className='form-submit'>
            <input type='submit' value='Create a task'></input>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TodoListForm