const todoFetch = document.getElementById("todo-fetch");

// {
//     "userId": 1,
//     "id": 8,
//     "title": "quo adipisci enim quam ut ab",
//     "completed": true
//   }

let baseUrl = "https://jsonplaceholder.typicode.com/todos";
// let id = '';
todoFetch.addEventListener("click",(e)=>{
    let url = baseUrl;

    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        renderTodos(data);
    }).catch((error)=>{
        console.log("Error occured: "+error);
    });

});

function createTodo(element){
    let div = document.createElement("div");
    let p = document.createElement("p");
    let check = document.createElement("input");

    check.type = "checkbox";
    check.name = "status";
    check.checked = element.completed;

    p.innerText = element.title;
    div.style.display = "flex";
    div.style.justifyContent = "center";

    div.append(p,check);
    return div;
}

function renderTodos(object){
    let todosContainer = document.getElementById("todo-container");
    if(Array.isArray(object)){
        object.forEach(element => {
            let todo = createTodo(element);
            todosContainer.append(todo);
        });
    }
    else{
        let todo = createTodo(object);
        todosContainer.append(todo);
    }
}