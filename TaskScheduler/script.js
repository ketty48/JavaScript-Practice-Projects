const taskScheduler = {
    tasks: [],

    addTask:(title, description, dueDate) =>{
        const task = { title, description, dueDate, completed: false };
        taskScheduler.tasks.push(task);
       // console.log(taskScheduler.tasks);
    },

    sortTasks: () => {
        const sortedTasks = taskScheduler.tasks.slice().sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
        console.log("Sorted tasks:");
        sortedTasks.forEach((task, index) => {
            console.log(`${index + 1}. Title: ${task.title}, Description: ${task.description}, Due Date: ${task.dueDate}`);
        });
    },
    updateTask: function(title, newDetails) {
        const findIndex = this.tasks.findIndex(task => task.title === title);
        if (findIndex >= 0) {
            if (typeof newDetails === 'object') {
            this.tasks[findIndex] = { ...this.tasks[findIndex], ...newDetails };
            console.log(`Task "${title}" updated successfully:`);
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
         if(findIndex>=0 && this.tasks[findIndex].completed==true){
          this.tasks.splice(title,1);
         }
    }
    
};

taskScheduler.addTask('wedding', 'this Saturday I will attend a wedding', '2024-02-25');
taskScheduler.addTask('class', 'this Monday I have a class', '2024-02-12');

taskScheduler.updateTask('class',{description:'this friday i have a quiz',dueDate:'2024-02-23'});
taskScheduler.updateTask('wedding',0);
taskScheduler.removeTask('wedding',0);
taskScheduler.sortTasks();
console.log(taskScheduler.tasks);