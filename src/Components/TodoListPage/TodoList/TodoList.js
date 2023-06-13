import TodoListItem from "../TodoListItem/TodoListItem"

const TodoList = ({ data, onRemoveTask, onEditTask, onChangeStatus }) => {

  if (data && data.length > 0) {
    return (
      <div className='todo-list-wrapper'>
        <div className='todo-list-title'>
          <div className='name-title'>
            <h3>Name</h3>
          </div>
          <div className='description-title'>
            <h3>Description</h3>
          </div>
          <div className='status-title'>
            <h3>Status</h3>
          </div>
          <div className='due-date-title'>
            <h3>Created</h3>
          </div>
          <div className='date-title'>
            <h3>Due date</h3>
          </div>
        </div>
        {
          data.map((task, index) => <TodoListItem task={task} index={index} key={index} onRemoveTask={onRemoveTask} onEditTask={onEditTask} onChangeStatus={onChangeStatus}></TodoListItem>)
        }
      </div>
    )
  }

  return (
    <div className='todo-list-wrapper'>
      <h2>No tasks yet...</h2>
    </div>
  )
}

export default TodoList