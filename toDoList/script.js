
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

//console.log("todolist");
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
            if (task >= 0 && task < todoList[category].length && todoList[category][task].completed === true) {
                 todoList[category].splice(task, 1);
                return todoList;
                
            }else{
             return 'task is not completed';
                
            }
        };
        addTask("school","Do the assigniment","12:00 pm");
        addTask("personal","visit a frieand ","20:00.pm");
        addTask("school","presentation ","03:00 pm");
        addTask("personal","run at","05:00.pm");
        markTaskAsCompleted("school", 0);
        console.log(displayListByCategory())
        const result=  removeTask("school",0);
        console.log(result);
         //console.log(displayListByCategory());
