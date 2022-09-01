"use strict";
// We need to tell TS this is an input element, so we can use its value property
var input = document.getElementById("todo-input");
var btn = document.querySelector("button");
var form = document.querySelector('form');
var list = document.getElementById('todo-list');
function readTodos() {
    var todosJSON = localStorage.getItem("todos");
    if (todosJSON) {
        return JSON.parse(todosJSON);
    }
    else {
        var todos_1 = [];
        return todos_1;
    }
}
;
var todos = readTodos();
todos.forEach(createTodoElement);
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var newTodoText = input.value;
    if (newTodoText.trim().length > 0) {
        // Creating todo obj
        var newTodo = {
            text: newTodoText,
            completed: false,
        };
        createTodoElement(newTodo);
        todos.push(newTodo);
        saveTodos();
        input.value = "";
    }
    else {
        alert("You must write a new todo");
    }
});
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function createTodoElement(todo) {
    var newLI = document.createElement("LI");
    var checkbox = document.createElement("INPUT");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLI.append(todo.text);
    newLI.append(checkbox);
    list.append(newLI);
}
