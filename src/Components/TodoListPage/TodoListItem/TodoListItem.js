
const TodoListItem = ({ task }) => {

  const { name, description, status, date } = task;

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
    </div>
  )
}

export default TodoListItem