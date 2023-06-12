import TodoListItem from "../TodoListItem/TodoListItem"

const TodoList = ({ data, onRemoveTask }) => {

  

  return (
    <div className='todo-list-wrapper'>
      {
        data.map((task, index) => <TodoListItem task={task} key={index} onRemoveTask={onRemoveTask}></TodoListItem>)
      }
    </div>
  )
}

export default TodoList