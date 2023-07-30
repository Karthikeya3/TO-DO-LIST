// Function to add a task to the list
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <span class="delete-button" onclick="deleteTask(this)">Delete</span>
    `;
    taskList.appendChild(li);

    taskInput.value = "";
}

// Function to delete a task from the list
function deleteTask(deleteButton) {
    const taskList = document.getElementById("taskList");
    const taskItem = deleteButton.parentNode;
    taskList.removeChild(taskItem);
}
