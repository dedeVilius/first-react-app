import TodoListItem from "../TodoListItem/TodoListItem"

const TodoList = ({ data }) => {

  

  return (
    <div className='todo-list-wrapper'>
      {
        data.map((task, index) => <TodoListItem task={task} key={index}></TodoListItem>)
      }
    </div>
  )
}

export default TodoList