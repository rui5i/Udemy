var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?");

while (input !== "quit") {
    if (input === "list") {
        listTodo();
    } else if (input === "new") {
        newTodo();
    } else if (input === "delete") {
        deleteTodo();
    }

    input = prompt("What would you like to do?");
}
console.log("Ok, you quit the App!");

function listTodo() {
    console.log("**********");
    todos.forEach(function(todo, i) {
        console.log(i + ": " + todo);
    })
    console.log("**********");
}

function newTodo() {
    var newTodo = prompt("Enter new todo!");
    todos.push(newTodo);
    console.log("Added Todo");
}

function deleteTodo() {
    var index = prompt("Enter index of todo to delete");
    todos.splice(index, 1);
}