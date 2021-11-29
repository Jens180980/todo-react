//Imports
import {useState} from 'react'
import NewTodo from './newTodo'
import TodoList from './todoList'




function TodoMain () {
  // Global state
  const [todoList, setTodoList] = useState([])
  // console.log(todoList);

  //Global create todo function
  const addTodo = newTodo => {
    const newTodoList = [newTodo, ...todoList]
    setTodoList(newTodoList)
  }

  //Global remove todo function
  const subTodo = id => {
    const removedArr = [...todoList].filter(todo => todo.id !== id)
    setTodoList(removedArr);
  }


  return (
    <>
    <NewTodo onSubmit={addTodo}/>
    <TodoList subTodo={subTodo} todoList={todoList}/>
    </>
  )
}

export default TodoMain
