const taskManager = new TaskManager();
// taskManager.addTask("a", "A", "me", "12/12/22");
// taskManager.addTask("b", "B", "you", "12/15/22");
// taskManager.addTask("c", "C", "him", "12/17/22");
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
    // console.log(newTaskNameInput);

    // validation code 

    // get the value of the form inputs

    const taskName = newTaskNameInput.value;
    const description = newTaskDescription.value;
    const assignedTo = newTaskAssignedto.value;
    const dueDate = newTaskDueDate.value;

    if (!validFormFieldInput(taskName) || !validFormFieldInput(description) || !validFormFieldInput(assignedTo) || !validFormFieldInput(dueDate)) {
        errorMessage.innerHTML = "Invalid input";
        errorMessage.style.display = "block";
        alert("Error!")
    } else {
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

    // console.log(taskId);
    // console.log(typeof taskId);
    // console.log(event.target);

    const task = taskManager.getTaskById(taskId);
    task.status = "Done";
    taskManager.render();

});

    // if (event.target.classList.contains("done-button")) {
    //     console.log("YAY");
    //     console.log("   if event.target.classList.contains(done-button): event\n");
    //     console.log(event);
    //     // console.log("   if event.target.classList.contains(done-button): event.target\n" + event.target);
    // }




  // console.log("tasksList-click-event: " + event);
    // console.log("tasksList-click-event-target: " + event.target);
    // console.log(event.target.classList);
    // console.log(event.target.parentElement);