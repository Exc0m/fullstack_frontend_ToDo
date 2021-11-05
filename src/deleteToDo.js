import state from "./state"

const deleteToDo = (id) => {
    fetch(`http://localhost:3030/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" }
    })
        .then((res) => {
            if (res.ok) {
                state.todos.forEach((item) => {
                    if (item._id === id) {
                        item._id.parentElement.remove()
                    }
                })
            }
        })
        .catch((e) => {
            console.log(`Ошибка ${e}`)
    })
}

export default deleteToDo
