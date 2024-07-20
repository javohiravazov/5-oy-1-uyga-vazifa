document.getElementById("add-button").addEventListener("click", addTodo);
document.getElementById("clear-all").addEventListener("click", clearAllTodos);

function addTodo() {
  const todoInput = document.getElementById("todo-input");
  const todoText = todoInput.value.trim();

  if (todoText === "") return;

  const todoList = document.getElementById("todo-list");
  const todoItem = document.createElement("li");
  todoItem.className = "todo-item";

  todoItem.innerHTML = `
        ${todoText}
        <button onclick="removeTodoItem(this)">🗑️</button>
    `;

  todoList.appendChild(todoItem);
  todoInput.value = "";

  updateTaskCount();
}

function removeTodoItem(button) {
  const todoItem = button.parentElement;
  todoItem.remove();
  updateTaskCount();
}

function clearAllTodos() {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";
  updateTaskCount();
}

function updateTaskCount() {
  const todoList = document.getElementById("todo-list");
  const taskCount = todoList.children.length;
  const taskCountText = `You have ${taskCount} pending tasks`;
  document.getElementById("task-count").textContent = taskCountText;
}
