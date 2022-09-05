function createTaskHtml(taskName, description, dueDate, assignedTo, status, id) {
    const html = `
    <div data-task-id= ${id} class="card" style="width: 18rem; ">
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
        for (let i = 0; i < this.tasks.length; i++) {
            let currentTask = this.tasks[i];
            let date = new Date(currentTask.dueDate);
            let formattedDate = date.toString();
            let taskHtml = createTaskHtml(currentTask.name, currentTask.description, formattedDate, currentTask.assignedTo, currentTask.status, currentTask.id);
            tasksHtmlList.push(taskHtml);

            console.log(currentTask);
        }

        const tasksHtml = tasksHtmlList.join(`\n`);
        document.querySelector("#tasksId").innerHTML = tasksHtml;
        // console.log(task);
        // document.querySelector("#tasksId").innerHTML = `<ul id="tasksId">EMPTY</ul>`;

    }

    //create the addtask method

    addTask(taskName, description, assignedTo, dueDate, status) {
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
