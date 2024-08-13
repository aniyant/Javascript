// Problem 1

const foodDeliveryService = {
  serviceName: "TastyBites Delivery",
  location: "Foodville",
  restaurants: {
    italianCorner: {
      menu: {
        pizza: { available: 20, price: 12 },
        pasta: { available: 30, price: 10 },
        salad: { available: 15, price: 8 },
      },
      orders: [
        { id: 1, items: ["pizza", "pasta"], total: 22 },
        { id: 2, items: ["salad", "pasta"], total: 18 },
        { id: 3, items: ["pizza", "pasta"], total: 12 },
      ],
    },
    burgerJoint: {
      menu: {
        burger: { available: 25, price: 8 },
        fries: { available: 40, price: 4 },
        drink: { available: 30, price: 2 },
      },
      orders: [
        { id: 1, items: ["burger", "fries"], total: 12 },
        { id: 2, items: ["drink", "burger", "fries"], total: 14 },
        { id: 3, items: ["drink"], total: 2 },
      ],
    },
  },
  restaurantNames: ["italianCorner", "burgerJoint"],
};

// Level-Problem 1-1
function findDetails(foodDeliveryService) {
  //write your code here...
  let {restaurants:{italianCorner:{menu:{pizza:{available:pizzaAvailable,price:pizzaPrice}}},burgerJoint:{menu:{burger:{available:burgerAvailable,price:burgerPrice}}}}} = foodDeliveryService
  
  return {
    pizzaAvailable,
    burgerAvailable,
    pizzaPrice,
    burgerPrice
  }

}
// console.log(findDetails(foodDeliveryService));

// Level-Problem 1-2
function calculateTotalRevenue(foodDeliveryService) {
 //write your code here...
 let {restaurants:{italianCorner:{orders:orderi},burgerJoint:{orders:orderb}}} = foodDeliveryService
 let ans = orderi.reduce((sum,ele)=>{
    sum += ele.total;
    return sum;
 },0);
 ans = orderb.reduce((sum,ele)=>{
  sum += ele.total;
  return sum;
},ans);
return String(ans);
}
// console.log(calculateTotalRevenue(foodDeliveryService)); //80 = (22+18+12+12+14+2)


// Problem 2: Student Exam Scores

const studentExamScores = [
  { name: "Alex", grades: [80, 92, 88, 95] },
  { name: "Eva", grades: [75, 88, 91, 79] },
  { name: "Max", grades: [90, 84, 87, 93] },
  { name: "Sophia", grades: [85, 89, 92, 78] },
  { name: "Oliver", grades: [88, 90, 85, 94] },
  { name: "Ava", grades: [76, 83, 88, 91] },
];

function calculateAverageExamScore(studentExamScores, name) {
 //write your code here...
 let avg = 0;
 for( let {name:sname,grades} of studentExamScores){
    if(sname == name ){
      let sum = grades.reduce((acc,ele)=>(acc+ele),0);
      avg = sum/grades.length;
    }
 }
 return `Average Exam Score for ${name}: ${avg}`
}


function findTopScorer(studentExamScores) {
 //write your code here...
 let maxAvg = 0;
 let sname = '';
 for( let {name,grades} of studentExamScores){
   
      let sum = grades.reduce((acc,ele)=>(acc+ele),0);
      let avg = sum/grades.length;
      if(avg>maxAvg){
        maxAvg = avg;
        sname = name;
      };
    }
    return "Top Scorer: "+sname;
 }
 console.log(findTopScorer(studentExamScores)); // Top Scorer: Oliver

function findPassingStudents(studentExamScores) {
 //write your code here...
 let Avg = 86;
 let sname = [];
 for( let {name,grades} of studentExamScores){
   
      let sum = grades.reduce((acc,ele)=>(acc+ele),0);
      let avg = sum/grades.length;
      if(avg>=Avg){
        sname.push(name);
      };
    }
    return sname;
}
console.log(findPassingStudents(studentExamScores));
// [ 'Alex', 'Max', 'Sophia', 'Oliver' ]











//don't remove below export statement part
export {
  findDetails,
  calculateTotalRevenue,
  calculateAverageExamScore,
  findTopScorer,
  findPassingStudents,
};
