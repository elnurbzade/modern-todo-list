const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
console.log(Date.now());
const savedTodos = JSON.parse(localStorage.getItem("todos") || []);
for (const todo of savedTodos) {
  addTodoList(todo);
}
function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText === "") return;

  const todo = {
    id: Date.now(),
    text: todoText,
    completed: false,
  };
  savedTodos.push(todo);
  localStorage.setItem("todos", JSON.stringify(savedTodos));
  addTodoToList(todo);
  todoInput.value = "";
}

function addTodoToList(todo) {
  const li = document.createElement("li");
  li.setAttribute("id", todo.id);
  li.innerHTML = `
<span title="$(todo.text)">$(todo.text) ></span>
<button></button> 
<button></button> 
<button></button> 
`;
}
