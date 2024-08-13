let user = localStorage.getItem("user");
user = user ? JSON.parse(user):null;

if(user){
    let welcome = document.getElementById('welcome');
    welcome.innerHTML = `<h2> Welcome ${user.name}</h2><p>You are logged In. You can review and rate. Enjoy full experience</p>`
    let form = document.getElementById("form");
    form.hidden = true;
}
else{
    let welcome = document.getElementById('welcome');
    welcome.innerHTML = "<h2>welcom to signup page</h2>";
}

let form = document.getElementById('form');
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let user = {name,password};

    let welcome = document.getElementById('welcome');
    welcome.innerHTML = `<h2> Welcome ${name}</h2><p>Now you can review and rate. Enjoy full experience</p>`
    localStorage.setItem("user",JSON.stringify(user));
})