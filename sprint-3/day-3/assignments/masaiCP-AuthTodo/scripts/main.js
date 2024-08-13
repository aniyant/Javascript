// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

const recipeIngredientURL = `${baseServerURL}/recipeIngredients`;
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/user/register`;
const userLoginURL = `${baseServerURL}/user/login`;
let paginationWrapper = document.getElementById("pagination-wrapper");

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");

let loginUserButton = document.getElementById("login-user");
let getTodoButton = document.getElementById("fetch-todos");

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let userId = localStorage.getItem("userId") || null;
const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
const urlTodosBase = `${baseServerURL}/todos/`;

// checkUser();

// //checking user already exist in localStorage or not
// function checkUser(){
//   console.log(userAuthToken+" "+userId);
//   if(userAuthToken){
//     fetchUserInfo();
//   }
// }

async function fetchUserInfo(){
  let username = loginUserUsername.value;
  let password = loginUserPassword.value;
  let userCredentials = {
    username,
    password
  };
  
  let res = await fetch(userLoginURL,{
    method:"POST",
    headers:{
      "Content-type":"application/json",
    },
    body:JSON.stringify(userCredentials)
  })
  let data = await res.json();

  
    console.log(data);
    notificationWrapper.innerHTML = `<h5 class="notification info">
    hey ${data.user.username}, welcome back!
</h5>`;
   
    localStorage.setItem("localAccessToken",JSON.stringify(data.accessToken));
    localStorage.setItem("userId",JSON.stringify(data.user.id));

    if(localStorage.getItem("localAccessToken") !== null){
      userAuthToken = localStorage.getItem("localAccessToken");
    }else{
      userAuthToken = null;
    }

    if(localStorage.getItem("userId") !== null){
      userAuthToken = localStorage.getItem("userId");
    }else{
      userAuthToken = null
    }
    // userId = localStorage.getItem("userId") || null;

    // console.log(userAuthToken+" "+userId);
}

// login users event
loginUserButton.addEventListener("click",(e)=>{
  fetchUserInfo();
});

//fetching user todos
getTodoButton.addEventListener("click",(e)=>{
  userAuthToken = JSON.parse(localStorage.getItem("localAccessToken")) || null;
  userId = JSON.parse(localStorage.getItem("userId")) || null;

  let userTodosUrl = baseServerURL+`/todos?userId=${userId}`;
  fetch(userTodosUrl,{
    method:"GET",
    headers:{
      "Authorization":`Bearer ${userAuthToken}`,
    }
  })
  .then((res)=>{
    return res.json();
  })
  .then((data)=>{
    console.log(data);
    renderTodos(data);
  })
  .catch((error)=>{
    console.log("Error occurred in fetching:"+error);
  })
});

// creatTodo function
function createTodo(obj,index){
  let label = document.createElement("label");
  let input = document.createElement("input");
  let text = document.createTextNode(obj.title);

  input.type = "checkbox";
  input.classList.add("todo-item-checkbox");
  input.setAttribute("data-id",obj.id);
  input.checked = obj.completed;
  
  
  input.addEventListener("click",(e)=>{
    obj.completed = obj.completed ? false:true;
    input.checked =  obj.completed;

    let updateTodo = {"completed":obj.completed};
    let todoUrl = urlTodosBase+obj.id;
    fetch(todoUrl,{
      method:"PATCH",
      headers:{
        "Content-type":"application/json",
        "Authorization":`Bearer ${userAuthToken}`
      },
      body:JSON.stringify(updateTodo),
    })
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      console.log(data);
    })
    .catch((error)=>{
      console.log("Error during patching: "+error);
    });

  });

  //append input to label
  label.append(input,text);

  return label;
};

//function renders todos
function renderTodos(arr){
  mainSection.innerHTML = '';
  let div = document.createElement("div");
  div.setAttribute("id","todo-wrapper")
  div.className = "todo-wrapper";

  arr.forEach((element,index)=>{
    let todo = createTodo(element,index);
    div.append(todo);
  });
  mainSection.append(div);
}