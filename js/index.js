const taskManager = new TaskManager();

taskManager.load();
taskManager.render();
console.log(taskManager);

const validFormFieldInput = (data) => {
    if (data !== null && data !== "") {
        return true;
    } else {
        return false;
    }
}

let newTaskForm = document.querySelector("#newTaskForm");
newTaskForm.addEventListener('submit', (event) => {
    // prevent page refresh on form submission
    event.preventDefault();

    console.log(event);

    //select the inputs
    const newTaskNameInput = document.querySelector("#taskname");
    const newTaskDescription = document.querySelector("#taskdescr");
    const newTaskAssignedto = document.querySelector("#Assigned");
    const newTaskDueDate = document.querySelector("#start");
    const errorMessage = document.querySelector(".alert");


    // get the value of the form inputs

    const taskName = newTaskNameInput.value;
    const description = newTaskDescription.value;
    const assignedTo = newTaskAssignedto.value;
    const dueDate = newTaskDueDate.value;
    //console.log(taskName);

    if (!validFormFieldInput(taskName) || !validFormFieldInput(description) || !validFormFieldInput(assignedTo) || !validFormFieldInput(dueDate)) {
        errorMessage.innerHTML = "Invalid input";
        errorMessage.style.display = "block";
        alert("Error!")
    }
    else {
        alert("submission is completed!");
    }


    //select the inputs
    const newtasknameinput = document.querySelector("#taskname").value;
    const newtaskndescription = document.querySelector("#taskdescr").value;
    const newtaskassignedto = document.querySelector("#Assigned").value;
    const newtaskduedate = document.querySelector("#start").value;
    const newtaskmessage = document.querySelector("#alertmess");

    // console.log(newtaskassignedto);
    taskManager.addTask(newtasknameinput, newtaskndescription, newtaskassignedto, newtaskduedate, newtaskmessage);
    taskManager.render();


});

let tasksList = document.querySelector("#tasksId");
console.log(tasksList);
tasksList.addEventListener("click", event => {
    let parentTask = event.target.parentElement;
    let taskId = parentTask.dataset.taskId;
    let task = taskManager.getTaskById(taskId);
    task.status = "Done";

    if (event.target.classList.contains("delete-button")) {
        taskManager.deleteTask(taskId);
    }

    taskManager.render();
    taskManager.save();
});
