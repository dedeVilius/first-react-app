import { useState } from "react";
import TodoListForm from "../../Components/TodoListPage/TodoListForm/TodoListForm"
import TodoListItem from "../../Components/TodoListPage/TodoListItem/TodoListItem"
import './TodoListPage.css';
import TodoList from "../../Components/TodoListPage/TodoList/TodoList";

const TodoListPage = () => {

  const tasksData = [
    {
      name: 'Užduotis 1',
      description: 'Reikia atlikti namų ruošos darbus',
      status: false,
      date: '2023-06-11'

    },
    {
      name: 'Užduotis 2',
      description: 'Reikia atlikti tam tikras funkcijas',
      status: true,
      date: '2023-06-12'

    },
  ];

  const [tasks, setTasks] = useState(tasksData);

  const addTaskHandler = (task) => {
    setTasks(prevState => [task, ...prevState])
  }

  return (
   <div className='content-wrapper'>
    <TodoListForm onNewTask={addTaskHandler} />
    <TodoList data={tasks}/>
   </div>
  )
}

export default TodoListPage