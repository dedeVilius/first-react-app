import { useState } from "react";

const TodoListItem = ({ task, onRemoveTask, index, onEditTask, onChangeStatus }) => {

  const { name, date, description, status, dueDate } = task;

  let statusElement = 'Not completed';

  if (status) {
    statusElement = 'Completed'
  }

  return (
    <div className='todo-item'>
      <div className='name'>
        <span>{name}</span>
      </div>
      <div className='description'>
        <span>{description}</span>
      </div>
      <div className='status'>
        <span>{statusElement}</span>
        <br />
        <br />
        <button onClick={() => onChangeStatus(index)}>Change status</button>
      </div>
      <div className='date'>
        <span>{date}</span>
      </div>
      <div className='due-date'>
        <span>{dueDate}</span>
      </div>
      <div className="item-control">
        <button onClick={() => onRemoveTask(index)}>Remove</button>
        <br />
        <br />
        <button onClick={() => onEditTask(index)}>Edit</button>
        <br></br>
      </div>
    </div>
  )
}

export default TodoListItem