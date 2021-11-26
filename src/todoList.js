

const TodoList = ({todoList, subTodo}) => {

return todoList.map((todo, index) => (
<div key={index} className="itemWrap">
  <p key={todo.id}>{todoList[index].text}</p>
  <button onClick={() => subTodo(todo.id)}>Delete task</button>
</div>
))
} //End TodoList

export default TodoList
