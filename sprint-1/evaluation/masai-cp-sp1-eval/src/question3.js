//Problem 1: Find Frequency

const superheroIceCreamData = [
  {
    name: "Iron Man",
    favoriteIceCreams: [
      "Strawberry",
      "Vanilla",
      "Chocolate",
      "Cookies & Cream",
    ],
  },
  {
    name: "Captain America",
    favoriteIceCreams: [
      "Cookies & Cream",
      "Mint Chocolate Chip",
      "Chocolate",
      "Vanilla",
    ],
  },
  {
    name: "Black Widow",
    favoriteIceCreams: ["Chocolate", "Rocky Road", "Pistachio", "Banana"],
  },
  {
    name: "Thor",
    favoriteIceCreams: ["Vanilla", "Chocolate", "Mint Chocolate Chip"],
  },
  {
    name: "Hulk",
    favoriteIceCreams: [
      "Vanilla",
      "French Vanilla",
      "Vanilla Bean",
      "Strawberry",
    ],
  },
  {
    name: "Black Panther",
    favoriteIceCreams: ["Strawberry", "Chocolate", "Mint Chocolate Chip"],
  },
];

function findFrequency(arr) {
  //write your code here...
  let ans = {};
  for(const data of superheroIceCreamData){
    let {favoriteIceCreams} = data;
    for(let x of favoriteIceCreams){
      ans[x] = (ans[x] || 0)+1;
    }
  }
  return ans;
}

//Problem-2:Salary By Department

function getTotalSalaryByDepartment(employees, department){
  //write your code here...
  return employees.filter((doc)=>(doc.department === department)).reduce((sum,doc)=>(sum+doc.salary),0);
}
const employees = [
  { name: "John", salary: 50000, department: "IT" },
  { name: "Mary", salary: 60000, department: "HR" },
  { name: "Bob", salary: 70000, department: "IT" },
  { name: "Alice", salary: 80000, department: "Sales" },
  { name: "Peter", salary: 90000, department: "Sales" }
];

console.log(getTotalSalaryByDepartment(employees, "IT"))
//Problem-3: 

function customGroupAndSort(products){
  //write your code here...
  return products.reduce((acc, product) => {
    // Group products by category
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {})
  // Sort products within each category by rating in descending order
  Object.entries(acc).reduce((sorted, [category, products]) => {
    sorted[category] = products.sort((a, b) => b.rating - a.rating);
    return sorted;
  }, {});
}


//Problem-4: 
function customSlice(array, start , end ) {
  //write your code here...
  if (start < 0) {
    start = Math.max(array.length + start, 0);
  }
 
  if (end < 0) {
    end = Math.max(array.length + end, 0);
  }
  
  end = Math.min(end, array.length);
  
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(array[i]);
  }
  return result;
}











//don't remove below export statement part
export {findFrequency,getTotalSalaryByDepartment,customGroupAndSort,customSlice}