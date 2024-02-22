
const todoList={
    school:[],
    personal:[],
};
const addTask=(category,task,time)=>{
    if(todoList.hasOwnProperty(category)){
        const tasks = { task: task,time:time, completed: false };
        todoList[category].push(tasks);
    }else{
        console.log(`${category} does not exist`);
    }
};
//console.log(todoList);
const displayListByCategory=()=>{
    for(const category in todoList){
        if(todoList.hasOwnProperty(category)){

           return todoList;
       
        };
    }
    
};

const markTaskAsCompleted=(category,task)=>{
    if(todoList.hasOwnProperty(category)){
        if(task>=0 && task<todoList[category].length){
            todoList[category][task].completed=true;
        } 
        }
    }
        //markTaskAsCompleted("school", 0);
      
        const removeTask=(category,task)=>{
            if (task >= 0 && task < todoList[category].length) {
                 todoList[category].splice(task, 1);
                 console.log('\n\n after removing task:\n');
                return todoList; 
                
            }else{
             return 'task is not available!';
                
            }
        };
        addTask("school","Do the assigniment","12:00 pm");
        addTask("personal","visit a frieand ","20:00.pm");
        addTask("school","presentation ","03:00 pm");
        addTask("personal","run at","05:00.pm");
        markTaskAsCompleted("school", 0); //mark task as completed
        console.log(displayListByCategory()); // display all todo list after making task as complete
        const result=  removeTask("personal",1); // remove task, i removed task in category personal, task on index 1
        console.log(result); // display list after removing
         //console.log(displayListByCategory());
