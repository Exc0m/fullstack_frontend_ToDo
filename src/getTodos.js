import state from "./state";
import render from "./render"

const getTodos = () => {
  fetch("http://localhost:3030/todos")
  .then((res) => res.json())
  .then((posts) => {
    state.todos = posts
    render()
  })
}

export default getTodos