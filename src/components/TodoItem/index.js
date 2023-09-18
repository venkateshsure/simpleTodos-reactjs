// Write your code here

import './index.css'

const TodoItem = props => {
  const {eachUser, deleteTodo} = props
  const {id, title} = eachUser
  const deleteTodoList = () => {
    deleteTodo(id)
  }
  return (
    <li className="list-con">
      <p>{title}</p>
      <button type="button" onClick={deleteTodoList}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
