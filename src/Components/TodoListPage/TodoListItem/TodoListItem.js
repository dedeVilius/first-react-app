
const TodoListItem = ({ task, onRemoveTask, index, onEditTask }) => {

  const { name, date, description, status, dueDate } = task;

  console.log(date)
  console.log(dueDate);

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
      </div>
    </div>
  )
}

export default TodoListItem