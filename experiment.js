'use strict'
// hoistedFunction();  // Outputs " Hello world! " even when the function is declared after calling

// function hoistedFunction (){
//   console.log(" Hello world! ");
// }

// hoistedVariable = 3;
// console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized
// var hoistedVariable;
// function doSomething() {
//     console.log(this);
//   }
  
//   doSomething();
// var name = {
//     firstName: "Masai",
//     lastName: "School",
//     };
//     var printFullName = function (homeTown) {
//     console.log(homeTown); 
//     };
//     //how we will pass is, 1st parameter is always a reference and other arguements can be arguments of the function
//     printFullName.call(name, "Bengalore"); // output: Masai School Bengalore
//     var name2 = {
//     firstName: "MS",
//     lastName: "Dhoni",
//     };
//     printFullName.call(name2, "Mumbai"); //output: MS Dhoni Mumbai

// function sumOfThreeElements(...elements){
//     return new Promise((resolve,reject)=>{
//     if(elements.length > 3 ){
//           reject("Only three elements or less are allowed");
//         }
//     else{
//     let sum = 0;
//     let i = 0;
//     while(i < elements.length){
//             sum += elements[i];
//             i++;
//           }
//           resolve(sum);
//         }
//       })
//     }

//     // let suming = sumOfThreeElements(1,2,5);
//     // suming.then((sum)=>console.log("sum:"+sum)).catch((err)=>console.log("error:"+err));

//     sumOfThreeElements(1,2,5).then((sum)=>console.log("sum:"+sum)).catch((err)=>console.log("error:"+err));

// function*iteratorFunc() {
//     let count = 0;
//     for (let i = 0; i < 2; i++) {
//         //   count++;
//             count += i;
//             yield count;
//       }
//     return count;
//     }
    
//     let iterator = iteratorFunc();
//     console.log(iterator.next()); // {value:0,done:false}
//     console.log(iterator.next()); // {value:1,done:false}
//     console.log(iterator.next()); // {value:2,done:true}

// let user = {
//     FirstName: "Masai",
//     lastName: "School",
//     get fullName() {
//         console.log(`${this.firstName} ${this.lastName}`);
//     },
//     set fullName(value) {
//         [this.firstName, this.lastName] = value.split(" ");
//     }
// };
//     // set fullName is executed with the given value.
//     user.fullName = "Masai School";
//     alert(user.firstName); // Masai
//     alert(user.lastName); // School

// function flattenArray(arr) {
//     let flattened = [];
//     arr.forEach((item) => {
//       if (Array.isArray(item)) {
//         flattenArray(item).forEach((nestedItem) => {
//           flattened.push(nestedItem);
//         });
//       } else {
//         flattened.push(item);
//       }
//     });
//     return flattened;
//   }
  
//   const nestedArray = [1, [2, 3], [4, [5, 6]]];
//   const flattenedArray = flattenArray(nestedArray);
//   console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
  
let timer;
function debounce(fn, delay) {
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

function name(xyz) {
    console.log(xyz);
}

let myname = debounce((xyz) => {
    name(xyz);
}, 1000);

myname("hello world");
