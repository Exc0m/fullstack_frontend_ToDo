import state from "./state"

const renderTodos = () => {
  const list = document.getElementById("list")
  list.textContent = ""
  const buttonAdd = document.getElementById('add')
  const inputText = document.getElementById('input_text')

  state.todos.forEach((post) => {
    const div = document.createElement("div")
    const btnRemove = document.createElement("button")
    const checkboxInput = document.createElement("input")

    div.textContent = post.text

    div.classList.add("divList")
    checkboxInput.classList.add("galochka")
    checkboxInput.type = "checkbox";
    btnRemove.textContent = "❌"

    checkboxInput.checked = post.completed
    checkboxInput.addEventListener('change', () => {
      if (checkboxInput.checked) {
        div.style.opacity = ".3"
      } else {
        div.style.opacity = "1"
      }
    })
    if (checkboxInput.checked) {
      div.style.opacity = ".3"
    } else {
      div.style.opacity = "1"
    }

    div.prepend(checkboxInput)
    div.append(btnRemove)
    list.append(div)


    btnRemove.addEventListener("click", (e) => {
      e.target.parentElement.remove();

    })

})
}

export default renderTodos