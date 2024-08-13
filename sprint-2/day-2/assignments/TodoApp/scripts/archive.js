let archiveData = localStorage.getItem('archive');
archiveData = archiveData ? JSON.parse(archiveData):[];

renderTodos(archiveData);
let filtered;
let statusFilter;
let priorityFilter;
document.getElementById('priority').addEventListener('change',(e)=>{
    if(e.target.value){
        priorityFilter = archiveData.filter((element)=>(element.priority===e.target.value));
        renderTodos(priorityFilter);
    }
    else{
        renderTodos(archiveData);
        priorityFilter=null;
    }
});

document.getElementById('status').addEventListener('change',(e)=>{
    if(e.target.value && priorityFilter){
        statusFilter = priorityFilter.filter(element=>(element.status === e.target.value));
        renderTodos(statusFilter)
    }
    else if(e.target.value){
        statusFilter = archiveData.filter((element)=>(element.status === e.target.value));
        renderTodos(statusFilter);
    }
    else{
        renderTodos(archiveData);
        priorityFilter=null;
    }
})

function createTodo(obj,index){
    let tr = document.createElement('tr');
    let title = document.createElement('td');
    let priority = document.createElement('td');
    let status = document.createElement('td');
    let restore = document.createElement('td');
    let dlt = document.createElement('td');

    status.className = obj.status;
    priority.className = obj.priority;
    
    if(obj.priority === "Medium"){
        priority.style.background = "yellow";
    }
    if(obj.priority === "High"){
        priority.style.background = "red";
    }

    title.innerText = obj.title;
    priority.innerText = obj.priority;
    status.innerText = obj.status;
    restore.innerHTML = "<button>Restore</button>";
    dlt.innerHTML = "<button style='background-color:red;'>Delete</button>"

    restore.addEventListener("click",(e)=>{
        tr.remove();
        
        let restoreTodo = archiveData.splice(index,1);
        
        //rendering to table
        renderTodos(archiveData);
        localStorage.setItem("archive",JSON.stringify(archiveData));

        //saving restire on todo
        let todoData = localStorage.getItem("todo");
        todoData = todoData ? JSON.parse(todoData) : [];
        
        todoData.push(restoreTodo[0]);
        localStorage.setItem("todo",JSON.stringify(todoData));
    });

    dlt.addEventListener("click",(e)=>{
        tr.remove();
        
        archiveData.splice(index,1);
        renderTodos(archiveData);
        localStorage.setItem("archive",JSON.stringify(archiveData));
    });

    tr.append(title,priority,status,restore,dlt);
    return tr;
}
function renderTodos(arr) {//array object
    let tbody = document.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';
    arr.forEach((element,index) => {
        let todo = createTodo(element,index);
        tbody.append(todo);
    });
}

