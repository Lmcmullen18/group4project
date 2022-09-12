function createTaskHtml(taskName, description, dueDate, assignedTo, status, id) {
    console.log(taskName);
    console.log(description);
    const html = `
    <div class="card" style="width: 18rem; ">
    <div data-task-Id=${id} class="card-body">
      <h5 class="card-title" id="task1">Task name: ${taskName}</h5>
      <h6 class="card-subtitle mb-2 text-muted"> Description : ${description}</h6>
      <p class="card-text"> Assigned to : ${assignedTo}</p>
      <p class="card-text"> Due Date: ${dueDate}</p>
      <button  type="button" class="done-button btn btn-danger">${status}  
      </button >
      <button type="button" class="delete-button btn btn-dark">Delete</button></div>  
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
        }

        const tasksHtml = tasksHtmlList.join(`\n`);
        document.querySelector("#tasksId").innerHTML = tasksHtml;
    }

    //create the addtask method

    addTask(taskName, description, assignedTo, dueDate, status) {
        console.log(this.currentId);
        const task = {
            // increment the currentid property
            id: this.currentId++,
            name: taskName,
            description: description,
            dueDate: dueDate,
            assignedTo: assignedTo,
            status: 'TODO'
        };
        // push the task to the task property
        this.tasks.push(task);
    }

    getTaskById(taskId) {
        let foundTask;
        for (let i = 0; i < this.tasks.length; i++) {
            let task = this.tasks[i];
            const numTaskId = Number(taskId);
            if (task.id === numTaskId) {
                foundTask = task;
                return foundTask;
            }
        }
    }

    save() {
        let tasksJson = JSON.stringify(this.tasks);
        localStorage.setItem("tasks", tasksJson);
        let currentId = this.currentId.toString();
        localStorage.setItem("currentId", currentId);
    }

    load() {

        let tasksJson = localStorage.getItem("tasks");
        if (tasksJson !== null) {
            this.tasks = JSON.parse(tasksJson);
        }

        let currentId = localStorage.getItem("currentId");
        if (currentId !== null) {
            let numcurrentId = Number(currentId);
            this.currentId = numcurrentId + 1;
        }
    }

    deleteTask(taskId) {
        taskId = Number(taskId);
        let newTasks = [];
        for (let i = 0; i < this.tasks.length; i++) {
            let task = this.tasks[i];
            if (task.id !== taskId) {
                newTasks.push(task);
            }
        }
        this.tasks = newTasks;

    }
};
