function getTask(){   
    let x = document.getElementById("taskText").value;
    let y = document.getElementById("taskDate").value;
    
    localStorage.setItem("Task", x)
    localStorage.setItem("Date", y)
    let localTask = localStorage.getItem("Task")
    let localDate = localStorage.getItem("Date")
    document.getElementById("TaskPreviw").innerHTML = "Task: " + localTask + "Date: " + localDate;
    if ((localTask && localDate) === (x && y)) {
        document.taskData.reset();
    }
}