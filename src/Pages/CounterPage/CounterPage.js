import { useState } from 'react'
import './CounterPage.css';
import Container from '../../Components/Container/Container'

const CounterPage = () => {

  const mainNumber = 5;
  const [count, setCount] = useState(mainNumber);
  const [grade, setGrade] = useState([]);

  const countHandler = num => setCount(prevState => prevState + num);
  const reset = () => { setCount(mainNumber) }

  let colorClass = 'green';

  if (count < 5) {
    colorClass = 'red';
  }

  const inputChangeHandler = (event) => {
    setCount(Number(event.target.value))
  }

  const addGradeHandler = () => {
    setGrade(prevState => {
      const newState = [...prevState];
      newState.push(count);
      return newState;
    });
  }

  const removeGradeHandler = () => {
    console.log(grade);
  }

  const gradesList = grade && grade.length > 0 && (
    <ul>
      {grade.map((grade, index) => <><div><li key={index}>{grade}</li><button onClick={removeGradeHandler}>Remove grade</button></div></>)}
    </ul>
  );

  return (
    <Container>
      <div className='grades-form'>
        <h2>Count: <span className={colorClass}>{count}</span></h2>
        <input type='number' min='1' max='10' value={count} onChange={inputChangeHandler}></input>
        <button onClick={() => { countHandler(-1) }} disabled={count <= 1}>-1</button>
        <button onClick={() => { countHandler(-2) }} disabled={count <= 2}>-2</button>
        <button onClick={() => { countHandler(-5) }} disabled={count <= 5}>-5</button>
        <button onClick={reset}>Reset</button>
        <button onClick={() => { countHandler(5) }} disabled={count >= 6}>+5</button>
        <button onClick={() => { countHandler(2) }} disabled={count >= 9}>+2</button>
        <button onClick={() => { countHandler(1) }} disabled={count >= 10}>+1</button>
        <button onClick={addGradeHandler}>Add grade</button>
      </div>

      <div className='grades-list-wrapper'>
      <h4>{grade && grade.length > 0 ? 'Grades list:' : 'No grades'}</h4>
        {gradesList}
      </div>

    </Container>
  )
}

export default CounterPage