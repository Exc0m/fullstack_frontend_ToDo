import state from "./state"
import render from "./render";

console.log(state)

const deleteToDo = (id) => {
    fetch(`http://localhost:3030/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" }
    })
        .then((res) => {
            if (res.ok) {
                state.todos.forEach((item, ind) => {
                    if (item._id === id) {
                        state.todos.splice(ind, 1)
                        console.log(state)
                    }
                })
            }
        })
        .catch((e) => {
            console.log(`Ошибка ${e}`)
    })
    render()
}

export default deleteToDo
