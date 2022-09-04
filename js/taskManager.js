function createTaskHtml(taskName, description, dueDate, assignedTo, status) {

    const html = `
    <div class="card" style="width: 18rem; ">
    <div class="card-body">
      <h5 class="card-title" id="task1">Task name: ${taskName}</h5>
      <h6 class="card-subtitle mb-2 text-muted">task 1 description : ${description}</h6>
      <p class="card-text"> Assigned to : ${assignedTo}</p>
      <p class="card-text"> Due Date: ${dueDate}</p>
      <button  type="button" class="btn btn-danger">IN PROGRESS  
      </button >
      <button type="button" class="btn btn-dark">Delete</button></div>  
    </div>
  </div>
    `
    return html;
}

class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }

    render() {
        let tasksHtmlList = [];
        for (let i = 0; i < tasksHtmlList.length; i++) {
            currentTask = i;
            console.log(currentTask);
        }
        let date = new Date(dueDate)
        let formattedDate = date.toString()
        let taskHtml = createTaskHtml(taskName, description, formattedDate, assignedTo)
        tasksHtmlList.push(taskHtml);

    }

    //create the addtask method

    addTask(taskName, description, assignedTo, dueDate) {
        const task = {
            // increment the currentid property
            id: this.currentId++,
            name: taskName,
            description: description,
            dueDate: dueDate,
            status: 'TODO'
        };
        // push the task to the task property
        this.tasks.push(task);
    }

}
