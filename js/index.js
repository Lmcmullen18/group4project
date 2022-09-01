// const task1 = new TaskManager('task');
// console.log(task1.tasks);

const validFormFieldInput = (data) => {
    if (data !== null && data !== "") {
        return true;
    } else {
        return false;
    }
}

let newTaskForm = document.querySelector("#newTaskForm");
newTaskForm.addEventListener('submit', (event) => {
    // preventDefault action
    event.preventDefault();
    console.log(event);

    //select the inputs
    const newTaskNameInput = document.querySelector("#taskname");
    const newTaskDescription = document.querySelector("#taskdescr");
    const newTaskAssignedto = document.querySelector("#Assigned");
    const newTaskDueDate = document.querySelector("#start");
    const errorMessage = document.querySelector(".alert");
    console.log(newTaskNameInput);

    // validation code 

    // get the value of the form inputs

    const taskName = newTaskNameInput.value;
    const description = newTaskDescription.value;
    const assignedTo = newTaskAssignedto.value;
    const dueDate = newTaskDueDate.value;
    console.log(taskName);

    if (!validFormFieldInput(taskName) || !validFormFieldInput(description) || !validFormFieldInput(assignedTo) || !validFormFieldInput(dueDate)) {
        errorMessage.innerHTML = "Invalid input";
        errorMessage.style.display = "block";
        alert("Error!")
    } else {
        alert("submission is completed!");
    }

});
const textHtml = createTaskHtml(taskName, description, dueDate, assignedTo);
console.log(textHtml);