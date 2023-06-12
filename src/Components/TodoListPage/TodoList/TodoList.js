import TodoListItem from "../TodoListItem/TodoListItem"

const TodoList = ({ data, onRemoveTask, onEditTask }) => {

  return (
    <div className='todo-list-wrapper'>
      {
        data.map((task, index) => <TodoListItem task={task} index={index} key={index} onRemoveTask={onRemoveTask} onEditTask={onEditTask}></TodoListItem>)
      }
    </div>
  )
}

export default TodoList