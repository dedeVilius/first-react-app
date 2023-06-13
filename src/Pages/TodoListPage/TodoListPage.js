import { useState } from "react";
import TodoListForm from "../../Components/TodoListPage/TodoListForm/TodoListForm"
import TodoListItem from "../../Components/TodoListPage/TodoListItem/TodoListItem"
import './TodoListPage.css';
import TodoList from "../../Components/TodoListPage/TodoList/TodoList";

const TodoListPage = () => {

  const tasksData = [];

  const [tasks, setTasks] = useState(tasksData);
  const [editTaskIndex, setEditTaskIndex] = useState(null);
  const [editTask, setEditTask] = useState(null);

  const removeTaskHandler = (taskIndex) => {
    setTasks(prevState => prevState.toSpliced(taskIndex, 1))
  }

  const tasksUpdateHandler = (task) => {
    if (editTask) {
      setTasks(prevState => prevState.toSpliced(editTaskIndex, 1, task));
      setEditTask(null);
      setEditTaskIndex(null);
    } else {
      setTasks(prevState => [task, ...prevState])
    }
  }

  const editTaskHandler = (taskIndex) => {
    setEditTask(tasks[taskIndex]);
    setEditTaskIndex(taskIndex);
  }

  return (
    <div className='content-wrapper'>
      <TodoListForm editTaskData={editTask} onNewTask={tasksUpdateHandler} />
      <TodoList data={tasks} onRemoveTask={removeTaskHandler} onEditTask={editTaskHandler} />
    </div>
  )
}

export default TodoListPage