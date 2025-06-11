// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add a task
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create list item
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Create remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn"); // استخدمنا classList.add زي ما ALX طالبة

    // Event listener to remove the task
    removeButton.addEventListener("click", () => {
      taskList.removeChild(listItem);
    });

    // Append button and list item to the task list
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    // Clear input field
    taskInput.value = "";
  }

  // Event listener for Add Task button
  addButton.addEventListener("click", addTask);

  // Allow adding task with Enter key
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
