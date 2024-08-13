
let cartData = localStorage.getItem("cart");
let cart = cartData?JSON.parse(cartData):[];

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

    // addToCartLink.href = 'cart.html';
    addToCartLink.addEventListener("click",(e)=>{
        let cartData = localStorage.getItem("cart")
        let cart = JSON.parse(cartData);
        if(cart){
           cart = cart.toSpliced(index,1);
        }
        localStorage.setItem("cart",JSON.stringify(cart));
        div.remove();
    });

    id.innerHTML = `<strong>Id</strong>: ${obj.id}`;
    name.innerHTML = `<strong>Name</strong>: ${obj.name}`;
    username.innerHTML = `<strong>Username</strong>: ${obj.username}`;
    email.innerHTML = `<strong>Email</strong>: ${obj.email}`;
    addToCartLink.innerHTML = "<button>DELETE CART</button>";
    // console.log(div);
    // console.log(typeof div);
    addToCartDiv.appendChild(addToCartLink);
    div.append(id,name,username,email,addToCartDiv);
    return div;
}

function renderCard(obj){ // pass array object
  let container = document.getElementById("card-container");
  obj.forEach((element,index) => {
    let card = createCard(element);
    // console.log(card);
    // console.log(typeof card);
    container.append(card);
  });
}
renderCard(cart);


