const todoList = [
    { todo: "clone repo for starter code", status: "complete" },
    { todo: "link css and javascript to index.html", status: "started" },
    { todo: "beautify the site", status: "complete" },
    { todo: "write javascript functions", status: "started" }
]

const completedTodos = []

for (const task of todoList) {
    if (task["status"] === "complete") {
        completedTodos.push(task)
    }
}

// completedTodos.forEach(fucntion(task){const {todo} = task; console.log(todo); })