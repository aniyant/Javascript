// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const artURL = `${baseServerURL}/arts`;
let mainSection = document.getElementById("data-list-wrapper");
let paginationWrapper = document.getElementById("pagination-wrapper");

// art
let artTitleInput = document.getElementById("art-title");
let artImageInput = document.getElementById("art-image");
let artartistInput = document.getElementById("art-artist");
let artYearInput = document.getElementById(
  "art-year"
);
let artPaintBrushesInput = document.getElementById("art-paintbrushes");
let artPriceInput = document.getElementById("art-price");
let artMediumInput = document.getElementById("art-medium");
let artCreateBtn = document.getElementById("add-art");

// Update art
let updateArtIdInput = document.getElementById("update-art-id");
let updateArtTitleInput = document.getElementById("update-art-title");
let updateArtImageInput = document.getElementById("update-art-image");
let updateArtartistInput = document.getElementById(
  "update-art-artist"
);
let updateArtYearInput = document.getElementById(
  "update-art-year"
);
let updateArtPaintBrushesInput = document.getElementById(
  "update-art-paintbrushes"
);
let updateArtPriceInput = document.getElementById("update-art-price");
let updateArtMediumInput = document.getElementById("update-art-medium");
let updateArtBtn = document.getElementById("update-art");

//Update price
let updatePackageArtId = document.getElementById("update-art-medium");
let updatePackageArtPackage = document.getElementById(
  "update-package-art-package"
);
let updatePackageArtBtn = document.getElementById("update-package-art");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterTemperaOnCanvas = document.getElementById("filter-Tempera-on-Canvas");
let filterOilOnCanvas = document.getElementById("filter-Oil-on-Canvas");

//Search by title/colour

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

//Arts Data
let artsData = [];
let queryParamString = null;
let pageNumber = 1;


// extracting all inital data from server
fetchData(artURL+"?_page=1&_limit=5");

async function fetchData(url,queryParams = ""){
  try{
      console.log(`${url}${queryParams}`);
      let res = await fetch(url+queryParams);
      console.log(res);
      let data = await res.json();
      console.log(data);
      renderCards(data);

      //pagination
      let totalData = res.headers.get("X-Total-Count");
      let limit = 5;
      let totalPage = Math.ceil(totalData/limit)
      paginationWrapper.innerHTML = "";
      for(let i=1;i<=totalPage;i++){
          let btn = document.createElement("button");
          btn.innerText = i;
          btn.addEventListener("click",()=>{
              fetchData(artURL+`?_page=${i}&_limit=${limit}`,queryParams); 
          });
          paginationWrapper.append(btn)
      }
  }
  catch(err){
      console.log(err);
  }
}

// add new art
artCreateBtn.addEventListener("click",(e)=>{
  let title = artTitleInput.value;
  let image = artImageInput.value;
  let artist = artartistInput.value;
  let year = artYearInput.value;
  let medium = artMediumInput.value;
  let price = artPriceInput.value;
  let paintbrushes = artPaintBrushesInput.value.split(",");

  let doc = {
    title,
    image,
    artist,
    year,
    medium,
    price,
    "details":{
      paintbrushes,
      "solvents":[]
    }
  };

  try{
    fetch(artURL,{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(doc)
    })
    .then(()=>{
      fetchData(artURL+"?_page=1&_limit=5");
    });
  }
  catch(error){
    console.log("Error occured in adding art: "+error);
  }

});

// updating all fields of art
updateArtBtn.addEventListener("click",(e)=>{
  let id = updateArtIdInput.value;
  let title = updateArtTitleInput.value;
  let image = updateArtImageInput.value;
  let artist = updateArtartistInput.value;
  let year = updateArtYearInput.value;
  let medium = updateArtMediumInput.value;
  let price = updateArtPriceInput.value;
  let paintbrushes = updateArtPaintBrushesInput.value.split(",");

  let doc = {
    title,
    image,
    artist,
    year,
    medium,
    price,
    "details":{
      paintbrushes,
    }
  };

  try{
    fetch(artURL+`/${id}`,{
      method:"PATCH",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(doc)
    })
    .then(()=>{
      fetchData(artURL+"?_page=1&_limit=5");
    });;
    
  }
  catch(error){
    console.log("Error occured in adding art: "+error);
  }

});

// updating only price field
updatePackageArtBtn.addEventListener("click",(e)=>{
  let id = document.getElementById("update-package-art-id").value;
  let price = updatePackageArtPackage.value;

  let doc = {
    price
  }

  try{
    let res = fetch(artURL+`/${id}`,{
      method:"PATCH",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(doc)
    })
    .then(()=>{
      fetchData(artURL+"?_page=1&_limit=5");
    });
    
  }
  catch(error){
    console.log("Error occured in adding art: "+error);
  }
})

//sort the package in asc
sortAtoZBtn.addEventListener("click",(e)=>{
  fetchData(artURL+`?_page=1&_limit=5`,"&_sort=price&_order=asc")
})

//sort the package in desc
sortZtoABtn.addEventListener("click",(e)=>{
  fetchData(artURL+`?_page=1&_limit=5`,"&_sort=price&_order=desc")
})

// filter based on filterTemperaOnCanvas
filterTemperaOnCanvas.addEventListener("click",(e)=>{
  fetchData(artURL+`?_page=1&_limit=5`,"&medium=Tempera on Canvas");
})

//filterOilOnCanvas filer
filterOilOnCanvas.addEventListener("click",(e)=>{
  fetchData(artURL+`?_page=1&_limit=5`,"&medium=Oil on Canvas");
});

// search by title
searchByButton.addEventListener("click",(e)=>{
  let search = searchBySelect.value;
  let searchInput = searchByInput.value;

  fetchData(artURL+`?_page=1&_limit=5`,`&${search}_like=${searchInput}`);
});

// create card function
function createCard(obj,index){
  //card containing div
  let div = document.createElement("div");
  div.className = "card";
  div.setAttribute("data-id",index+1);

  //image related tags
  let div_image = document.createElement("div");
  div_image.className = "card-img";
  let image = document.createElement("img");
  image.setAttribute("alt","art");
  image.setAttribute("src",obj.image);
  //appendin img into div
  div_image.appendChild(image);

  //card-body tags
  let div_body = document.createElement("div");
  div_body.className = "card-body";

  let title  = document.createElement("h5");
  title.className = "card-title";
  title.innerText = obj.title;

  let artist = document.createElement("h5");
  artist.className = "card-artist";
  artist.innerText = obj.artist;
  
  let year = document.createElement("p");
  year.className = "card-year";
  year.innerText = obj.year;
  
  let paintbrushes = document.createElement("p");
  paintbrushes.className = "card-paintbrushes";
  paintbrushes.innerText = `paintbrushes : ${obj.details.paintbrushes.join(" ")}`;

  let price = document.createElement("p");
  price.className = "card-price";
  price.innerText = obj.price;

  let medium = document.createElement("p");
  medium.className = "card-medium";
  medium.innerText = obj.medium;
 
  let a = document.createElement("a");
  a.className = "card-link";
  a.setAttribute("href","#");
  a.setAttribute("data-id",index+1);
  a.innerText = "Edit";

  //Edit eventlistener 
  a.addEventListener("click",(e)=>{
    e.preventDefault();
    document.getElementById("update-art-id").value = obj.id;
    document.getElementById("update-art-title").value = obj.title;
    document.getElementById("update-art-image").value = obj.image;
    document.getElementById("update-art-artist").value = obj.artist;
    document.getElementById("update-art-year").value = obj.year;
    document.getElementById("update-art-paintbrushes").value = obj.details.paintbrushes.join(",");
    document.getElementById("update-art-price").value = obj.price;
    document.getElementById("update-art-medium").value = obj.medium;

    //populating only price update field
    document.getElementById("update-package-art-id").value = obj.id;
    document.getElementById("update-package-art-package").value = obj.price;

  })

  let button = document.createElement("button");
  button.className = "card-button";
  button.setAttribute("href",'#');
  button.setAttribute("data-id",index+1);
  button.innerText = "DELETE";
  
  // adding delete
  button.addEventListener("click",(e)=>{
    fetch(artURL+`/${obj.id}`,{
      method:"DELETE"
    })
    .then((res)=>{return res.json()})
    .then((data)=>(console.log(data)))
    .then(()=>{
      fetchData(artURL+"?_page=1&_limit=5");
    })
    .catch((error)=>(console.log(error)));
  });

  //appending tags into body-div
  div_body.append(title,artist,year,paintbrushes,price,medium,a,button);

  div.append(div_image,div_body);
  return div;
}

// function renderCards
function renderCards(arr) {
  try{
    mainSection.innerHTML = '';
    
    //creating div 
    let div = document.createElement("div");
    div.className = "card-list";

    if(Array.isArray(arr)){
      arr.forEach((element,index)=>{
        let card = createCard(element,index);
        div.append(card);
      });

      //appending div into mainSection
      mainSection.append(div);
    }  
  }
  catch(error){
    console.log("Error occured :-> "+error);
  }
}


