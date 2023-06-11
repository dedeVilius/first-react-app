function ShoppingItem({ data, onDoneTask }) {

  const doneItemHandler = () => {
    onDoneTask();
  }

  return (
    <li className={`shopping-item ${data.done ? 'done' : ''}`} onClick={doneItemHandler}>{data.title}</li>
  )
}

export default ShoppingItem