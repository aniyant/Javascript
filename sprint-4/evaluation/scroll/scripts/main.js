// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://127.0.0.1:${
  import.meta && import.meta.env && import.meta.env.REACT_APP_JSON_SERVER_PORT
    ? import.meta.env.REACT_APP_JSON_SERVER_PORT
    : 9090
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
let mainSection = document.getElementById("data-list-wrapper");
let getRecipesBtn = document.getElementById("fetch-recipes");
let totalResult = document.querySelector(".total-results");
const urlAllRecipes = `${baseServerURL}/recipes`;

let recipesArray = [];
let page = 1;
let recipes = 5;
getRecipesBtn.addEventListener("click",async (e)=>{
  page = 1;
  fetchData(page);
})
// let container = document.getElementsByClassName("container")[0];
// let scrollHeight = document.documentElement.scrollHeight;
// let clienHeight = document.documentElement.clientHeight;
// let scrollTop = document.documentElement.scrollTop;
// window.addEventListener("scroll",(e)=>{
//   console.log(scrollHeight+" "+clienHeight+" "+scrollTop);
//   if(scrollHeight - clientHeight <= Math.ceil(scrollTop)){
//     fetchData(page++);
//   }
// })

async function fetchData(page){
  let url = urlAllRecipes+`?_page=${page}&_per_page=${recipes}`;
  let res = await fetch(url);
  console.log(res);
  let data = await res.json();
  console.log(data);
  recipesArray = [...data];
  renderRecipes(recipesArray);
}
/* <div class="recipe-card">
      <div>
          <img src="{******You need to render image src of the recipe here********}" alt=""> 
      </div>      
      <div class="recipe-details">
        <h2 class="recipe-name">{***********You need to render name of the recipe here *****}</h2>
        <p class="recipe-price">{*****You need to render price of the recipe here *****}</p>
      </div>
</div> */
function createCard(obj,index){
  let div = document.createElement("div");
  div.className = "recipe-card";

  div.innerHTML = `<div>
                  <img src=${obj.image} alt=""> 
                </div>      
                <div class="recipe-details">
                <h2 class="recipe-name">${obj.name}</h2>
                <p class="recipe-price">${obj.price}</p>
                </div>`;
  return div;
}

function renderRecipes(data){
  mainSection.innerHTML = ""
  data.forEach((element)=>{
    let card = createCard(element);
    mainSection.append(card);
  })

  totalResult.innerHTML = recipesArray.length;
}