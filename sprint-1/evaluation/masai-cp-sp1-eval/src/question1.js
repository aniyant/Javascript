//Problem 1:
let arr = [
  {
    name: "student1",
    subjects: [
      { Maths: 60 },
      { History: 30 },
      { English: "50" },
      { Biology: "40" },
    ],
    total: "",
  },
  {
    name: "student2",
    subjects: [
      { Maths: "35" },
      { History: "66" },
      { English: "20" },
      { Biology: "30" },
    ],
    total: "",
  },
];

function findTotal(arr) {
//write your code here...
arr.forEach(element => {
  let total = 0;
  element.subjects.forEach(subjects=>{
    for(let score of Object.values(subjects)){
      total += parseInt(score);
    }
  });
  element.total = total;
});
return arr;
}




//Problem 2

function advancedRearrange(arr) {
  //write your code here
  let a = arr.splice(2,5);
  a.reverse();
  let ans = [...a,...arr];
  return ans;
}



// Problem 3

let categoriesDirectory = {
  1: "ASUS",
  2: "HP",
  3: "Dell",
};
let MadeInArea = [
  { id: 1, name: "India" },
  { id: 2, name: "USA" },
];

let MadeInAreaDirectory = MadeInArea.reduce((acc, item) => {
  acc[item.id] = item.name;
  return acc;
}, {});

let exampleInputArray = [
  {
    idProduct: "8TH GEN CORE I7",
    strProduct: "ASUS ZENBOOK FLIP 13 UX362FA LAPTOP",
    Category: 1,
    Area: 2,
    strSpecification1: "Processor",
    strSpecification2: "Generation",
    strSpecification3: "Cache",
    strSpecification4: "Core",
    strSpecification5: "Model",
    strSpecification6: "Brand",
    strSpecification7: "Series",
    strSpecification8: "Speed",
    strSpecification9: "Boost upto",
    strSpecification10: "",
    strSpecification11: "",
    strSpecification12: "",
    strSpecification13: "",
    strSpecification14: "",
    strSpecification15: "",
    strSpecification16: null,
    strSpecification17: null,
    strSpecification18: null,
    strSpecification19: null,
    strSpecification20: null,
    strDetail1: "Intel",
    strDetail2: "8th Gen",
    strDetail3: "8 MB",
    strDetail4: "Quad Core",
    strDetail5: "8565U",
    strDetail6: "Intel",
    strDetail7: "Core i7",
    strDetail8: "1.8 GHz",
    strDetail9: "4.6 GHz",
    strDetail10: "",
    strDetail11: "",
    strDetail12: "",
    strDetail13: "",
    strDetail14: "",
    strDetail15: "",
    strDetail16: null,
    strDetail17: null,
    strDetail18: null,
    strDetail19: null,
    strDetail20: null,
  },

  {
    idProduct: "8TH GEN CORE I5",
    strProduct: "HP ELITEBook X360 (4SU65UT) LAPTOP",
    Category: 2,
    Area: 1,
    strSpecification1: "Processor",
    strSpecification2: "Generation",
    strSpecification3: "Cache",
    strSpecification4: "Core",
    strSpecification5: "Model",
    strSpecification6: "Brand",
    strSpecification7: "Series",
    strSpecification8: "Speed",
    strSpecification9: "Boost upto",
    strSpecification10: "",
    strSpecification11: "",
    strSpecification12: "",
    strSpecification13: "",
    strSpecification14: "",
    strSpecification15: "",
    strSpecification16: null,
    strSpecification17: null,
    strSpecification18: null,
    strSpecification19: null,
    strSpecification20: null,
    strDetail1: "Intel",
    strDetail2: "8th Gen",
    strDetail3: "6 MB",
    strDetail4: "Quad Core",
    strDetail5: "8250U",
    strDetail6: "Intel",
    strDetail7: "Core i5",
    strDetail8: "1.6 GHz",
    strDetail9: "3.4 GHz",
    strDetail10: "",
    strDetail11: "",
    strDetail12: "",
    strDetail13: "",
    strDetail14: "",
    strDetail15: "",
    strDetail16: null,
    strDetail17: null,
    strDetail18: null,
    strDetail19: null,
    strDetail20: null,
  },
  {
    idProduct: "7TH GEN PENTIUM GOLD",
    strProduct: "DELL INSPIRON 15 3583 LAPTOP",
    Category: 3,
    Area: 1,
    strSpecification1: "Processor",
    strSpecification2: "Generation",
    strSpecification3: "Cache",
    strSpecification4: "Core",
    strSpecification5: "Model",
    strSpecification6: "Brand",
    strSpecification7: "Series",
    strSpecification8: "Speed",
    strSpecification9: "Boost upto",
    strSpecification10: "",
    strSpecification11: "",
    strSpecification12: "",
    strSpecification13: "",
    strSpecification14: "",
    strSpecification15: "",
    strSpecification16: null,
    strSpecification17: null,
    strSpecification18: null,
    strSpecification19: null,
    strSpecification20: null,
    strDetail1: "Intel",
    strDetail2: "7th Gen",
    strDetail3: "2 MB",
    strDetail4: "Dual Core",
    strDetail5: "5405U",
    strDetail6: "Intel",
    strDetail7: "Pentium Gold",
    strDetail8: "1.6 GHz",
    strDetail9: "2.3 GHz",
    strDetail10: "",
    strDetail11: "",
    strDetail12: "",
    strDetail13: "",
    strDetail14: "",
    strDetail15: "",
    strDetail16: null,
    strDetail17: null,
    strDetail18: null,
    strDetail19: null,
    strDetail20: null,
  },
];



function massageArray(inputArray) {
//write your code here...
let ans = inputArray.map(element=>{
  const productId = element.idProduct;
  const productTitle = element.strProduct;
  const Category = categoriesDirectory[element.Category];
  let cMadeInArea = '';
  for(let {id,name} of MadeInArea){
    // let {id,name} = doc;
    if(id === element.Area){
      cMadeInArea += name;
      // console.log(doc.name);
    };
  };

  let Specifications = [];
  for(let i=1;i<=20;i++){
    if(element[`strSpecification${i}`] && element[`strDetail${i}`]){
        Specifications.push({Specification:element[`strSpecification${i}`],detail:element[`strDetail${i}`]});
    }
  }
  return {
    productId,
    productTitle,
    Category,
    MadeInArea:cMadeInArea,
    Specifications
  };
});
return ans;
}





















//don't remove below export statement part
export { findTotal, massageArray, exampleInputArray, advancedRearrange };
