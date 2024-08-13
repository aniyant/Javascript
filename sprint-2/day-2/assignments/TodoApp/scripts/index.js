let todoData = localStorage.getItem("todo");

todoData = todoData ? JSON.parse(todoData):[];
console.log(todoData);

let submit = document.getElementsByTagName('form')[0];
submit.addEventListener("submit",(e)=>{
    e.preventDefault();
    let title = document.getElementById('title').value;
    let priority = document.getElementById('priority').value;
    let status = document.getElementById('status').value;

    if(!title || !priority || !status){
        alert("Todo cannot be empty!.");
        return;
    }
    let newTodoData = {title,priority,status};
    
    todoData.push(newTodoData);
    renderTodos(todoData);
    //saving in localStorage
    localStorage.setItem('todo',JSON.stringify(todoData));

    //reseting the input value in dom;
    document.getElementById('title').value = '';
});

function createTodo(obj,index){
    let tr = document.createElement('tr');
    let title = document.createElement('td');
    let priority = document.createElement('td');
    let status = document.createElement('td');
    let archive = document.createElement('td');

    status.className = obj.status;
    priority.className = obj.priority;

    title.innerText = obj.title;
    priority.innerText = obj.priority;
    status.innerText = obj.status;
    archive.innerText = "archive";
    
    if(obj.priority === "Medium"){
        priority.style.background = "yellow";
    }
    if(obj.priority === "High"){
        priority.style.background = "red";
    }

    status.addEventListener("click",(e)=>{
        let curStatus = status.innerText;
        if( curStatus == "pending 🩸"){
            status.innerText = "completed ✔";
            status.className = "completed";
        }
        if( curStatus == "completed ✔"){
            status.innerText = "pending 🩸";
            status.className = "pending";
        }

        todoData[index].status = status.innerText;
        localStorage.setItem("todo",JSON.stringify(todoData));
    });

    archive.addEventListener("click",(e)=>{
        tr.remove();
        let archivedObjArray = todoData.splice(index,1);
        
        renderTodos(todoData);

        //saving todo on localStorage i
        localStorage.setItem("todo",JSON.stringify(todoData));

        //saving archivedData on archive
        let archiveData = localStorage.getItem("archive");
        archiveData = archiveData ? JSON.parse(archiveData) : [];
        
        archiveData.push(archivedObjArray[0]);
        localStorage.setItem("archive",JSON.stringify(archiveData));
    })
    tr.append(title,priority,status,archive);
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

renderTodos(todoData);