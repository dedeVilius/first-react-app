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

  const changeStatusHandler = (taskIndex) => {
    setTasks(prevState => {
      console.log(prevState);
      const newState = [...prevState];
      const completedTask = newState[taskIndex];
      console.log(completedTask)
      const updatedCompletedTask = {...completedTask};
      console.log(updatedCompletedTask)
      updatedCompletedTask.status = !updatedCompletedTask.status;

      newState[taskIndex] = updatedCompletedTask;

      return newState;
    })
  }

  return (
    <div className='content-wrapper'>
      <TodoListForm editTaskData={editTask} onNewTask={tasksUpdateHandler} />
      <TodoList data={tasks} onRemoveTask={removeTaskHandler} onEditTask={editTaskHandler} onChangeStatus={changeStatusHandler}/>
    </div>
  )
}

export default TodoListPage