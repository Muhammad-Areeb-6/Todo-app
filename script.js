function getTask() {
    let taskText = document.getElementById("taskText").value;
    let taskDate = document.getElementById("taskDate").value;
    if (taskText === "" || taskDate === "") {
        alert("Please enter a task and date.");
        return;
        
    }
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ text: taskText, date: taskDate, completed: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();
    document.getElementById("taskForm").reset();
}

function displayTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskTable = document.getElementById("taskTable");
    taskTable.innerHTML = "";

    tasks.forEach((task, index) => {
        let row = taskTable.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);

        cell1.innerHTML = `<input class="check" type="checkbox" ${task.completed ? "checked" : ""} onclick="toggleTask(${index})">`;
        cell2.innerHTML = task.text;
        cell3.innerHTML = task.date;
        cell4.innerHTML = `<button class="deleteBtn" onclick="deleteTask(${index})">Delete</button>`;
    });     
}

function deleteAllTasks() {
    localStorage.removeItem("tasks");
    displayTasks();
}

function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

function toggleTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

// Call displayTasks on page load to show existing tasks
window.onload = displayTasks;