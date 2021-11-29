//Import statements
import { useState } from 'react'
import QuanItem from './counter'


// Export function
const NewTodo = props => {

//Usestate is set
const [input, setInput] = useState('')
const [counter, setCounter] = useState(1)

//Counter functions
const setCount = (count) => {
  let newCount = count
  setCounter(newCount)
}

//Sending data from input
const handleSubmit = e => {
  e.preventDefault();
  props.onSubmit({id: Math.floor(Math.random() * 10000),
      text: input, count: counter});
  setInput('')
}

//Retrieving data from setInput
const handleChange = e => setInput(e.target.value)

//Returned from function
  return (
    <section>
    <form onSubmit={handleSubmit}>
    <input
    onChange={handleChange}
    value={input}
    type="text"
    name="todoItem"
    id="todoItem"
    placeholder="Indtast vare"/>
  <QuanItem className='newTodoWrap' setCount={setCount}/>
    <button
    onClick={handleSubmit}
    type="button"
    id="addItemBtn">
    Tilføj</button>
    </form>
    </section>
  ) //End return
} //Export function ends

//Default export
export default NewTodo
