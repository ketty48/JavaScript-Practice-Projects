class Task {
    constructor(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.completed = false;
    }

    // Method to mark task as completed
    markAsCompleted() {
        this.completed = true;
    }
}

class TaskScheduler {
    constructor() {
        this.tasks = [];
    }

    // Method to add a task with a due date
    addTask(title, description, dueDate) {
        const newTask = new Task(title, description, dueDate);
        this.tasks.push(newTask);
        console.log(`Task "${title}" added to the scheduler.`);
    }

    // Method to display tasks sorted by their due dates
    displayTasksSortedByDueDate() {
        const sortedTasks = this.tasks.slice().sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
        console.log("Tasks in the scheduler sorted by due date:");
        sortedTasks.forEach((task, index) => {
            console.log(`${index + 1}. Title: ${task.title}, Description: ${task.description}, Due Date: ${task.dueDate}`);
        });
    }

    // Method to update task details or mark tasks as completed
    updateTask(title, newTitle, newDescription, newDueDate, markAsCompleted = false) {
        const taskIndex = this.tasks.findIndex(task => task.title === title);
        if (taskIndex !== -1) {
            const task = this.tasks[taskIndex];
            task.title = newTitle || task.title;
            task.description = newDescription || task.description;
            task.dueDate = newDueDate || task.dueDate;
            if (markAsCompleted) {
                task.markAsCompleted();
                console.log(`Task "${title}" marked as completed.`);
            } else {
                console.log(`Task "${title}" updated.`);
            }
        } else {
            console.log(`Task "${title}" not found.`);
        }
    }

    // Method to remove a task from the scheduler
    removeTask(title) {
        const taskIndex = this.tasks.findIndex(task => task.title === title);
        if (taskIndex !== -1) {
            this.tasks.splice(taskIndex, 1);
            console.log(`Task "${title}" removed from the scheduler.`);
        } else {
            console.log(`Task "${title}" not found.`);
        }
    }
}

// Example usage
const scheduler = new TaskScheduler();
scheduler.addTask("Complete project report", "Write a detailed report about the project progress", "2024-02-28");
scheduler.addTask("Prepare presentation slides", "Create slides for the upcoming presentation", "2024-03-05");
//scheduler.displayTasksSortedByDueDate();
scheduler.updateTask("Complete project report", "Finalize project report", null, "2024-03-01");
scheduler.updateTask("Prepare presentation slides", null, null, null, true); // Mark as completed
//scheduler.displayTasksSortedByDueDate();
scheduler.removeTask("Prepare presentation slides");
scheduler.displayTasksSortedByDueDate();
