function getTask(){   
    let x = document.getElementById("taskText").value;
    let y = document.getElementById("taskDate").value;
    
    document.getElementById("TaskPreviw").innerHTML = "Task: " + x + " Date: " + y;
}