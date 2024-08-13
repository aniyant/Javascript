let user = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
    },
  ];

let userStorageData = JSON.parse(localStorage.getItem("user"));

if(userStorageData){
    user = userStorageData;
}
else{
    localStorage.setItem("user",JSON.stringify(user));
}

console.log(localStorage.getItem("cart"));

function createCard(obj,index){  // pass key-value pair obj;
    let div = document.createElement("div");
    let id = document.createElement('p');
    let name = document.createElement('p');
    let username = document.createElement("p");
    let email = document.createElement("p");
    let addToCartDiv = document.createElement("div");
    let addToCartLink = document.createElement('a');

    div.className = "card";
    id.className = "id";
    name.className = "name";
    username.className = "username";
    email.className = "email";
    addToCartDiv.className = "addToCart";

    addToCartLink.href = 'cart.html';
    addToCartLink.addEventListener("click",(e)=>{
        let cartData = localStorage.getItem("cart")
        let user = JSON.parse(localStorage.getItem("user"));
        let cart = JSON.parse(cartData);
        if(cart){
            cart.push(obj);
            user = user.toSpliced(index,1);
        }
        else{
            cart = [obj];
        }
        localStorage.setItem("user",JSON.stringify(user));
        localStorage.setItem("cart",JSON.stringify(cart));
        div.remove();
    });

    id.innerHTML = `<strong>Id</strong>: ${obj.id}`;
    name.innerHTML = `<strong>Name</strong>: ${obj.name}`;
    username.innerHTML = `<strong>Username</strong>: ${obj.username}`;
    email.innerHTML = `<strong>Email</strong>: ${obj.email}`;
    addToCartLink.innerHTML = "<button>ADD TO CART</button>";
    // console.log(div);
    // console.log(typeof div);
    addToCartDiv.appendChild(addToCartLink);
    div.append(id,name,username,email,addToCartDiv);
    return div;
}

function renderCard(obj){ // pass array object
  let container = document.getElementById("card-container");
  obj.forEach((element,index) => {
    let card = createCard(element,index);
    // console.log(card);
    // console.log(typeof card);
    container.append(card);
  });
}

renderCard(user);

// submit click even functionality ///
let submit = document.getElementsByTagName("form")[0];
submit.addEventListener("submit",(e)=>{
  e.preventDefault();
  // console.log(e.target.value);
  let id = document.getElementById("id").value;
  let name = document.getElementById("name").value;
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  
  if(id == '' || name == '' || username == '' || email == ''){
    window.alert('please check input properly');
  }
  else{
    renderCard([{id,name,username,email}]);
  
    document.getElementById("id").value = '';
    document.getElementById("name").value = '';
    document.getElementById("username").value= '';
    document.getElementById("email").value=' ';
  }
});
