import { useState, useEffect } from "react";

const TodoListForm = ({ onNewTask, editTaskData }) => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [id, setId] = useState();

  useEffect(() => {
    if (editTaskData) {
      setName(editTaskData.name);
      setDescription(editTaskData.description)
      setStatus(editTaskData.status)
      setDueDate(editTaskData.date)
    }
  }, [editTaskData])

  const nameHandler = (e) => setName(e.target.value);
  const descriptionHandler = (e) => setDescription(e.target.value);
  const statusHandler = (e) => setStatus(e.target.checked);
  const dueDateHandler = (e) => setDueDate(e.target.value);


  const submitTaskHandler = (e) => {
    e.preventDefault();

    const date = new Date();
    const fullDate = date.toISOString().slice(0, 10);

    const newTask = { name, date: fullDate, description, status, dueDate, id: Math.random() }

    onNewTask(newTask);
    setName('');
    setDescription('');
    setStatus('');
    setDueDate('');
  }

  return (
    <div className='todo-list-form-wrapper'>
      <div className="todo-list-form">
        <form onSubmit={submitTaskHandler}>
          <div className='form-control'>
            <label htmlFor='todo-list-name'>Task name: </label>
            <input type='text' id='todo-list-name' name='name' className='width-250' value={name} onChange={nameHandler}></input>
          </div>
          <div className='form-control'>
            <label htmlFor='todo-list-description'>Task description: </label>
            <textarea id='todo-list-description' name='description' className='width-250' value={description} onChange={descriptionHandler}></textarea>
          </div>
          <div className='form-control'>
            <label htmlFor='todo-list-status'>Completed: </label>
            <input type='checkbox' id='todo-list-status' name='status' checked={status} onChange={statusHandler} />
          </div>
          <div className='form-control'>
            <label htmlFor='todo-list-date'>Due date: </label>
            <input type='date' id='todo-list-date' name='date' className='width-250' value={dueDate} onChange={dueDateHandler} />
          </div>
          <div className='form-submit'>
            <input type='submit' value={`${editTaskData ? 'Edit a task' : 'Add a task'}`}></input>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TodoListForm