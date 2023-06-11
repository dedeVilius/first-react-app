import ShoppingItem from "../ShoppingItem/ShoppingItem"
import { useState } from "react"

function ShoppingList() {

  const shoppingListData = [{
    title: 'Pavadinimas 1',
    done: true
  },
  {
    title: 'Pavadinimas 2',
    done: false
  },
  {
    title: 'Pavadinimas 3',
    done: true
  },
  {
    title: 'Pavadinimas 4',
    done: false
  },
  {
    title: 'Pavadinimas 5',
    done: true
  }]

  const [shoppingList, setShoppingList] = useState(shoppingListData);
  const [newItem, setNewItem] = useState('');
  
  const titleElement = shoppingList && shoppingList.length > 0 ? <h2>Your shopping list:</h2> : <h2>Your shopping list is empty:</h2>;

  const itemList = shoppingList && shoppingList.length > 0 && (
    <ul className='item-list'>
      {shoppingList.map((data, index) => {
        return (
          <ShoppingItem data={data} key={index} />
        )
      })}
    </ul>
  )

  const newItemHandler = (event) => {
    event.preventDefault();
    setShoppingList(prevState => {
      const newItemArr = {
        title: newItem,
        done: true
      }
      // console.log(newItem);
      const newState = [newItemArr, ...prevState];
      setNewItem('');
      return newState;
    })
  }

  const itemInputHandler = (event) => {
    setNewItem(event.target.value)
    console.log(event.target.value)
  }

  const editItemHandler = () => {
    console.log('veikia');
  }


  return (
    <div>
      <form onSubmit={newItemHandler}>
        <label htmlFor="shopping-item">New Item:</label>
        <input type="text" id="shopping-item" name="shopping-item" value={newItem} onChange={itemInputHandler} onDoneTask={editItemHandler}/>

        <input type="submit" value="Create" />
      </form>
      {titleElement}
      <div className='item-list-wrapper'>
        {itemList}
      </div>
    </div>
  )
}

export default ShoppingList