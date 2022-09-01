class TaskManager {
    constructor(currentId = 0){
        this.tasks = [];
        this.currentId = currentId;
    }

    //create the addtask method

     addTask(name,description,assignedTo, dueDate){
         const task = {
             // increment the currentid property
             id: this.currentId++,
             name: name,
             description: description,
             dueDate: dueDate,
             status:'TODO'
         };
         // push the task to the task property
         this.tasks.push(task);
     }
}