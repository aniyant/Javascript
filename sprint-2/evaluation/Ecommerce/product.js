//getting product details from storage
let productData = localStorage.getItem("product");
productData = productData ? JSON.parse(productData):[];

//getting reviews from storage
let reviewData = localStorage.getItem("review");
if(reviewData){
    reviewData = JSON.parse(reviewData);
}
else{
    reviewData = [];
}

// getting signup details
let user = localStorage.getItem("user");
user = user ? JSON.parse(user):null;
if(user){
    let welcome = document.getElementById('welcome');
    welcome.innerHTML = `<h2>Hello, ${user.name}`;
}
else{
    let welcome = document.getElementById('welcome');
    welcome.innerHTML = `Welcome to Ecommerce`;
}

renderProducts(productData);
renderReview(reviewData);
function createCard(obj,index){
    let div = document.createElement('div');
    let id = document.createElement('p');
    let title = document.createElement('h2');
    let price = document.createElement('p');
    let desc = document.createElement('p')
    let category = document.createElement('h3');
    let image = document.createElement('img');
    let rating = document.createElement('p');

    div.className="card";
    title.className = "title";

    image.setAttribute("src",obj.image);
    image.setAttribute('alt',"Image Uavailable");

    id.innerText = obj.id;
    title.innerText = obj.title;
    price.innerText = obj.price;
    desc.innerText = obj.description;
    category.innerText = obj.category;
    rating.innerText =  obj.rating;

    div.append(id,title,price,desc,category,image,rating);
    return div;
    
}  


function renderProducts(arr){
    let container = document.getElementById('products-container');
    container.innerHTML = " ";
    arr.forEach((element,index) => {
        let card = createCard(element,index);
        container.append(card);
    });
}

// Adding event listener to the review
let form = document.getElementById('form');
form.addEventListener("submit",(e)=>{
    e.preventDefault();
   if(user){
    let rate = document.getElementById("rate").value;
    let review = document.getElementById("review").value;
    
    reviewData.push({rate,review});

    renderReview(reviewData);

    localStorage.setItem("review",JSON.stringify(reviewData));
   }
   else{
        alert("To add reviews, signup is required, Click Ok to SignUp")
        location.replace("./user.html");
   }
})


// creating review card
function createReview(obj,index){
    let div = document.createElement('div');
    let rate = document.createElement('h4');
    let review = document.createElement('p');

    rate.innerHTML = `Rate: ${obj.rate}`;
    review.innerHTML = `Review: ${obj.review}`;

    div.append(rate,review);
    return div;
}
function renderReview(arr){
    let reviewContainer = document.getElementById("review-container");
    reviewContainer.innerHTML = "";
    reviewContainer.innerHTML="<div><h3>Reviews and Rating Section:</h3> </div>";
    arr.forEach((element,index)=>{
        let card = createReview(element,index);
        reviewContainer.append(card);
    });
}