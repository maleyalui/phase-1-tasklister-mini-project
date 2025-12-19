document.addEventListener("DOMContentLoaded", () => {
// Select the form
const form = document.getElementById("create-task-form");

// Add submit event listener
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Select input correctly (JSDOM-safe)
  const taskInput = document.getElementById("new-task-description");
  const task = taskInput.value;

  buildToDo(task);

  // Clear input
  taskInput.value = "";
});

// Build and display task
function buildToDo(task) {
  const taskList = document.getElementById("tasks");

  const li = document.createElement("li");
  li.textContent = task;

  taskList.appendChild(li);
}

});
