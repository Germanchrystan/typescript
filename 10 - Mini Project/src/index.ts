// We need to tell TS this is an input element, so we can use its value property
const input = document.getElementById("todo-input")! as HTMLInputElement; 
const btn = document.querySelector("button")! as HTMLButtonElement;
const form = document.querySelector('form')!;
const list = document.getElementById('todo-list')! as HTMLUListElement;

function readTodos(): Todo[] {
    const todosJSON: string | null = localStorage.getItem("todos");
    if(todosJSON) {
        return JSON.parse(todosJSON);
    } else {
        const todos : Todo[] = [];
        return todos;
    }
}

interface Todo  {
    text: string;
    completed: boolean;
};

const todos : Todo[] = readTodos();

todos.forEach(createTodoElement);

form.addEventListener("submit", function(e) { // e infered as SubmitEvent type, since it is a function within an event listener
    e.preventDefault();
    const newTodoText: string = input.value;

    if(newTodoText.trim().length > 0){
        // Creating todo obj
        const newTodo: Todo = {
            text: newTodoText,
            completed: false,
        }
        createTodoElement(newTodo)
        todos.push(newTodo);
        saveTodos();

        input.value = "";
    } else {
        alert("You must write a new todo")
    }
    
})

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function createTodoElement(todo: Todo) {
    const newLI: HTMLElement = document.createElement("LI");
    const checkbox = document.createElement("INPUT") as HTMLInputElement;
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;

    checkbox.addEventListener("change", function() {
        todo.completed = checkbox.checked;
        saveTodos();
    })
    
    newLI.append(todo.text);
    newLI.append(checkbox);
    list.append(newLI);
}