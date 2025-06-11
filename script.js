document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Load tasks from localStorage when page loads
  loadTasks();

  // Function to add a task
  function addTask(taskText, save = true) {
    // لو جاي من input نعمل trim
    if (!taskText) {
      taskText = taskInput.value.trim();
    }

    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    removeButton.addEventListener("click", () => {
      taskList.removeChild(listItem);
      removeTaskFromLocalStorage(taskText);
    });

    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    // Clear input
    taskInput.value = "";

    // Save to localStorage if needed
    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }
  }

  // Function to load tasks from localStorage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false));
  }

  // Function to remove task from localStorage
  function removeTaskFromLocalStorage(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const updatedTasks = storedTasks.filter((task) => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  // Add button click event
  addButton.addEventListener("click", () => {
    addTask();
  });

  // Enter key event
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
