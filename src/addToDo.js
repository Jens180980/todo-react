//Import statements
import { useState } from 'react'

// Export function
function AddToDo (props) {

//Usestate is set
const [input, setInput] = useState('')

//Sending data from input
const handleSubmit = e => {
  e.preventDefault()

  props.onSubmit({
    id: Math.floor(Math.random() * 100000),
    text: input
  })
  console.log(input);
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
    placeholder="Type your todo"/>
    <button
    type="button"
    id="addItemBtn">
    Add</button>
    </form>
    </section>
  ) //End return
} //Export function ends

//Default export
export default AddToDo
