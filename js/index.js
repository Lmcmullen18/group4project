const task1 = new TaskManager('task');
console.log(task1.tasks);

newTaskForm.addEventListener('submit', (event) => {
    // preventDefault action
    event.preventDefault();
    
    //select the inputs
    const newtasknameinput = document.querySelector("#taskname");
    const newtaskndescription = document.querySelector("#taskdescr");
    const newtaskassignedto = document.querySelector("#Assigned");
    const newtaskduedate = document.querySelector("#start");
    const newtaskmessage = document.querySelector("#alertmess");
      




// validation code 

// get the value of the inputs

const name = newtasknameinput.value;
const description = newtaskndescription.value;
const assignedTo = newtaskassignedto.value;
const dueDate = newtaskduedate.value;
console.log(name +  description + assignedTo);
if(!validFormFieldInput(name)){
    errorMessage.innerHTML = "Invalid name input";
    errorMessage.style.display = "block";
    alert("Invalid name input");
} else{
    errorMessage.style.display = "none";

}

});

function validFormFieldInput(data){
    return data !== null && data !== '';
}
