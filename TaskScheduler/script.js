const taskScheduler = {
    tasks: [],

    addTask:function(title, description, dueDate) {
        const task = { title, description, dueDate, completed: false };
        this.tasks.push(task);
       // console.log(taskScheduler.tasks);
    },

    sortTasks:function ()  {
        const sortedTasks = this.tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
        console.log("\nTasks Schedular:\n");
        sortedTasks.forEach((task, index) => {
            console.log(`${index + 1}. Title: ${task.title}, Description: ${task.description}, Due Date: ${task.dueDate},completed: ${task.completed}`);
        });
    },
    updateTask: function(title, newDetails) {
        const findIndex = this.tasks.findIndex(task => task.title === title);
        if (findIndex >= 0) {
            if (typeof newDetails === 'object') {
            this.tasks[findIndex] = { ...this.tasks[findIndex], ...newDetails };
            console.log(`\nTask "${title}" updated successfully:`);
            console.log(this.tasks[findIndex]);
            }
            else{
         if(this.tasks[findIndex].completed===false){
            this.tasks[findIndex].completed=true;
            return taskScheduler;
        }else{
            console.log('task not found');
        }
    }
    }
        else {
            console.log('Task not found.');
        }
    },
    removeTask:function(title){
        const findIndex = this.tasks.findIndex(task => task.title === title);
         if(findIndex>=0){
          this.tasks.splice(findIndex,1);
         }else{
            console.log('task is not available!');
         }
    }
    
};

taskScheduler.addTask('wedding', 'this Saturday I will attend a wedding', '2024-02-25');
taskScheduler.addTask('class', 'this Monday I have a class', '2024-02-12');
taskScheduler.addTask('work', 'i have a metting', '2024-02-10');
//console.log(taskScheduler.tasks);
//console.log();
taskScheduler.sortTasks(); //displaying the sorted task by their due dates
taskScheduler.updateTask('class',{description:'this friday i have a quiz',dueDate:'2024-02-23'}); //input for update
taskScheduler.updateTask('work');  //mark this task as completed
taskScheduler.removeTask('wedding'); //remove this task
taskScheduler.sortTasks(); //display after updating and removing , and making as a complete
//console.log(taskScheduler.tasks);