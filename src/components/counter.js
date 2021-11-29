import { useState } from 'react'

const QuanItem = (props) => {

const [localCount, setLocalCount] = useState(1)



const addCount = (e) => {
  e.preventDefault()
  let newCount = localCount + 1
  setLocalCount(newCount)
  props.setCount(localCount)
}

const subCount = (e) => {
  e.preventDefault()
  let newCount = localCount - 1
  setLocalCount(newCount)
  props.setCount(localCount)
}

return (
  <div className='counterWrap'>
  <button onClick={subCount}>-</button>
  <p>{localCount}</p>
  <button onClick={addCount}>+</button>
  </div>
)

}//End of export function

export default QuanItem
