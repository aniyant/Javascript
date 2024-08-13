# JS- Destructuring Array,Object,HOF Inbuilt Method  

## Submission Instructions [Please note]

## Maximum Marks - 20

- Don't change/override package.json
- The Submission should not contain spaces, for example,/js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

## Installation
```
npm install --engine-strict
```
## Test
```
npm test
```
## Test (Watch mode)
```
npm test -- --watchAll
```
## Learning Objectives
- Array HOF(map,filter,forEach, reduce, sort)
- rest, spread operator
- destructuring
- Default parameter
  
## file structure

most of your work would happen in the `src` directory.
```
✅ Submit the problem [1 mark]

### Test cases for question1.js
----------------------------------------------
### Test cases for Problem 1
✅ checking array total amount in array [1.5 mark]

### Test cases for Problem 2
✅ should remove elements from index 2 up to index 6 (inclusive) and insert them back in reverse order [0.5 mark]                     
✅ should use the splice method for rearrangement [1 mark]

### Test cases for Problem 3
✅ array returned by massageArray to have property-value as expected [1 mark]                                                        
✅ rray returned by massageArray to be as expected [1 mark]

### Test cases for question2.js
----------------------------------------------

### Test cases for Problem 1
✅ Pizza Available, Burger Available, Pizza Price, and Burger Price [1 mark]
✅ Should calculate the total revenue correctly [1 mark]

### Test cases for Problem 2
✅ To calculate average exam score [1 mark]                                                                                          
✅ To find the student with the highest average exam score [1 mark]                                                                  
✅ To find an array containing the names of students who have passed [1 mark]

### Test cases for question3.js
----------------------------------------------

### Test cases for Problem 1
✅ to find the frequency of iceCream in superheroIceCreamData [3 mark] 

### Test cases for Problem 2
✅ to find the total salary of all employees in a given department [1 mark] 
✅ should use filter method [0.5 mark] 
✅ should use reduce method [0.5 mark] 

### Test cases for Problem 3
✅ to group the products by their categories and sort in descending order of their rating. [2 marks]

### Test cases for Problem 4 [2 marks]
✅ should use custom implementation instead of built-in slice method                                                         
✅ should return a portion of the array starting from the specified start index                                                    
✅ should return a portion of the array starting from the specified start index and ending before the specified end index   
✅ should handle negative start index                                                                                       
✅ should handle negative end index                                                                                         
✅ should handle start index greater than end index                                                                         
✅ should return a new array, not modify the original array


```

<span style="color: green"> Read the test results carefully, they may provide you with some extra information.</span>

_<span style=" color: red">Note: all the return statements/ messages while creating methods are case sensitive. Please try to follow as it is you can check using a running test case otherwise, you will lose marks for a particular part</span>._

# question1.js 

<h2 style="color:#215dc8">
 Problem-1:
</h2> 
For an array with an object of student mark, you have to modify that array and change the total with all subject aggregate. Pass an array as an argument in the function `findTotal` and return a modified array with the total marks(sum of all the marks student got), from the function. You can refer below as an example.

- The data type for the "marks" of the subject is either a `number` or a `string`.

- **`Hint`** : use Object.values() [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

- **input**
```javascript
let arr =[
    {
    name: "student1",
    subjects:[{Maths:60},{History:30},{English:"50"},{Biology:"40"}],
    total:""
    },
    {
    name: "student2",
    subjects:[{Maths:"35"},{History:"66"},{English:"20"},{Biology:"30"}],
    total:""
    }
    ]
    console.log(findTotal(arr));
```
- **Output**
```javascript
  [
    {
    name: "student1",
    subjects:[{Maths:60},{History:30},{English:"50"},{Biology:"40"}],
    total:180
    },
    {
    name: "student2",
    subjects:[{Maths:"35"},{History:"66"},{English:"20"},{Biology:"30"}],
    total:151
    }
  ]
```

<h2 style="color:#215dc8">
 Problem-2:
</h2> 

You have an array of integers with arbitrary length. Your task is to utilize the **`splice`** method to perform a more complex rearrangement as follows:

1. Remove elements starting from `index 2` up to `index 6` (inclusive) from the array.
2. Insert these removed elements back into the array starting from index 0, but in reverse order.

Write a JavaScript function named **`advancedRearrange`** that takes an array of integers as input and implements the described rearrangement. The function should return the modified array.

For example:

```jsx
const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

console.log(advancedRearrange(numbers));
```

### **Expected Output**

```jsx

[70, 60, 50, 40, 30, 10, 20, 80, 90, 100]

```

Ensure your function strictly adheres to the use of the **`splice`** method for removing and adding elements to the array.

<h2 style="color:#215dc8">
 Problem-3:
</h2> 
The function `massageArray()` is expected to return an array of objects.

Parameter of `massageArray()`: `inputArray` of type array

### Provided `MadeInArea`:
```javascript
let MadeInArea = [
  { id: 1, name: "India" },
  { id: 2, name: "USA" },
];
```
### Provided `categories`
```javascript
let categoriesDirectory = {
  1: "ASUS",
  2: "HP",
  3: "Dell",
};
```
### Example Input Array:
```javascript
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
```
- If `strSpecification` and `strDetail` is null or "" avoid them in the output array.
### **Expected Output**
```javascript
    let eo1 = [
    {
      productId: "8TH GEN CORE I7",
      productTitle: "ASUS ZENBOOK FLIP 13 UX362FA LAPTOP",
      Category: "ASUS",
      MadeInArea: "USA",
      Specifications: [
        { Specification: "Processor", detail: "Intel" },
        { Specification: "Generation", detail: "8th Gen" },
        { Specification: "Cache", detail: "8 MB" },
        { Specification: "Core", detail: "Quad Core" },
        { Specification: "Model", detail: "8565U" },
        { Specification: "Brand", detail: "Intel" },
        { Specification: "Series", detail: "Core i7" },
        { Specification: "Speed", detail: "1.8 GHz" },
        { Specification: "Boost upto", detail: "4.6 GHz" },
      ],
    },
    {
      productId: "8TH GEN CORE I5",
      productTitle: "HP ELITEBook X360 (4SU65UT) LAPTOP",
      Category: "HP",
      MadeInArea: "India",
      Specifications: [
        { Specification: "Processor", detail: "Intel" },
        { Specification: "Generation", detail: "8th Gen" },
        { Specification: "Cache", detail: "6 MB" },
        { Specification: "Core", detail: "Quad Core" },
        { Specification: "Model", detail: "8250U" },
        { Specification: "Brand", detail: "Intel" },
        { Specification: "Series", detail: "Core i5" },
        { Specification: "Speed", detail: "1.6 GHz" },
        { Specification: "Boost upto", detail: "3.4 GHz" },
      ],
    },
    {
      productId: "7TH GEN PENTIUM GOLD",
      productTitle: "DELL INSPIRON 15 3583 LAPTOP",
      Category: "Dell",
      MadeInArea: "India",
      Specifications: [
        { Specification: "Processor", detail: "Intel" },
        { Specification: "Generation", detail: "7th Gen" },
        { Specification: "Cache", detail: "2 MB" },
        { Specification: "Core", detail: "Dual Core" },
        { Specification: "Model", detail: "5405U" },
        { Specification: "Brand", detail: "Intel" },
        { Specification: "Series", detail: "Pentium Gold" },
        { Specification: "Speed", detail: "1.6 GHz" },
        { Specification: "Boost upto", detail: "2.3 GHz" },
      ],
    },
  ];
```


# question2.js
<h2 style="color:#215dc8">
 Problem-1:
</h2> 

- object `foodDeliveryService` is already provided in the template use this for problem as follows 

```javascript
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

```

### Level-Problem 1-1

- Extract the `pizzaAvailable`, `burgerAvailable`, `pizzaPrice`, and `burgerPrice` using multilevel destructuring

- Create function `findDetails` which takes `foodDeliveryService` as input and *return* object as 
    
```
    {
    pizzaAvailable: no of pizza available,
    burgerAvailable: no of burger available,
    pizzaPrice: the price of pizza,
    burgerPrice: the price of  burger,
  }
```

- Hint: use destructuring 

```javascript
//Example Invocation
console.log(findDetails(foodDeliveryService).pizzaAvailable); // 20
console.log(findDetails(foodDeliveryService).burgerAvailable); // 25
console.log(findDetails(foodDeliveryService).pizzaPrice); // 12
console.log(findDetails(foodDeliveryService).burgerPrice); // 8
```

### Level-Problem 1-2
- Write a function `calculateTotalRevenue` that calculates and returns the total revenue from all completed orders across all restaurants.

- Create function `calculateTotalRevenue` which take `foodDeliveryService` as input and *return*  a String as
`Total Revenue: {totalRevenue}`
### **Expected Output**
```js
//Example Invocation
 console.log(calculateTotalRevenue(foodDeliveryService)); //80 = (22+18+12+12+14+2)
```
<h2 style="color:#215dc8">
 Problem-2:
</h2>
You have been given a dataset representing student exam scores. Each student's information is represented as an object with the following properties:

```javascript
const studentExamScores = [
  { name: "Alex", grades: [80, 92, 88, 95] },
  { name: "Eva", grades: [75, 88, 91, 79] },
  { name: "Max", grades: [90, 84, 87, 93] },
  { name: "Sophia", grades: [85, 89, 92, 78] },
  { name: "Oliver", grades: [88, 90, 85, 94] },
  { name: "Ava", grades: [76, 83, 88, 91] },
];
```

- Write a function `calculateAverageExamScore` that takes `studentExamScores` array and `name` as parameter and returns the average score across all exams for a given student.

- Write a function `findTopScorer` that takes `studentExamScores` array and finds and returns the student with the highest average exam score .

- Write a function `findPassingStudents` that takes `studentExamScores` array and returns an array containing the names of students who have passed. A student is considered to have passed if their average exam score is 86 or higher.

### **Expected Output**

```javascript
console.log(calculateAverageExamScore(studentExamScores, "Alex")); // Average Exam Score for Alex: 88.75

console.log(findTopScorer(studentExamScores)); // Top Scorer: Oliver

console.log(findPassingStudents(studentExamScores));
// [ 'Alex', 'Max', 'Sophia', 'Oliver' ]
```


# question3.js
<h2 style="color:#215dc8">
 Problem-1:
</h2> 

define a `findFrequency` function that takes input as an array of objects and return an object of iceCream and their frequency.

```javascript
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
```
### **Expected Output**
```js
console.log(findFrequency(superheroIceCreamData));
//Answer
{
  Strawberry: 3,
  Vanilla: 4,
  Chocolate: 5,
  'Cookies & Cream': 2,
  'Mint Chocolate Chip': 3,
  'Rocky Road': 1,
  Pistachio: 1,
  Banana: 1,
  'French Vanilla': 1,
  'Vanilla Bean': 1
}
```
<h2 style="color:#215dc8">
 Problem-2:
</h2> 

Given an array of objects representing employees with **`name`**, **`salary`**, and **`department`** properties, write a function `getTotalSalaryByDepartment` that returns the total salary of all employees in a given department using **`.filter()`** and **`.reduce()`**.

```js
const employees = [
  { name: "John", salary: 50000, department: "IT" },
  { name: "Mary", salary: 60000, department: "HR" },
  { name: "Bob", salary: 70000, department: "IT" },
  { name: "Alice", salary: 80000, department: "Sales" },
  { name: "Peter", salary: 90000, department: "Sales" }
];
```
### **Expected Output**
```js
console.log(getTotalSalaryByDepartment(employees, "IT"))
//answer
247000
```

<h2 style="color:#215dc8">
 Problem-3:
</h2> 

You have been given an array of product objects. Write a function **`customGroupAndSort`** that performs the following tasks using only Higher-Order Functions:

1. Group the products by their categories.
2. Sort the products within each category based on a rating in descending order.
3. Return an object where keys are category names and values are arrays containing products sorted accordingly.

```jsx
const products = [
  {
    productName: "Monitor",
    category: "Electronics",
    quantity: 20,
    price: 250,
    rating: 4.6,
  },
  {
    productName: "Mouse",
    category: "Electronics",
    quantity: 30,
    price: 30,
    rating: 4.2,
  },
  {
    productName: "Keyboard",
    category: "Electronics",
    quantity: 25,
    price: 50,
    rating: 4.4,
  },
  {
    productName: "Handbag",
    category: "Fashion",
    quantity: 35,
    price: 70,
    rating: 4.3,
  },
  {
    productName: "Jacket",
    category: "Fashion",
    quantity: 40,
    price: 120,
    rating: 4.8,
  },
  {
    productName: "Jeans",
    category: "Fashion",
    quantity: 45,
    price: 60,
    rating: 4.5,
  },
  {
    productName: "Sofa",
    category: "Furniture",
    quantity: 10,
    price: 500,
    rating: 4.7,
  },
  {
    productName: "Coffee Table",
    category: "Furniture",
    quantity: 15,
    price: 300,
    rating: 4.6,
  },
  {
    productName: "Bed",
    category: "Furniture",
    quantity: 8,
    price: 800,
    rating: 4.9,
  },
  {
    productName: "Tripod",
    category: "Photography",
    quantity: 20,
    price: 150,
    rating: 4.4,
  },
  {
    productName: "Camera Bag",
    category: "Photography",
    quantity: 12,
    price: 80,
    rating: 4.1,
  },
  {
    productName: "Flashlight",
    category: "Photography",
    quantity: 18,
    price: 20,
    rating: 4.0,
  },
];

```

### **Expected Output**

```jsx
let obj = {
  Electronics: [
    {
      productName: "Monitor",
      category: "Electronics",
      quantity: 20,
      price: 250,
      rating: 4.6,
    },
    {
      productName: "Keyboard",
      category: "Electronics",
      quantity: 25,
      price: 50,
      rating: 4.4,
    },
    {
      productName: "Mouse",
      category: "Electronics",
      quantity: 30,
      price: 30,
      rating: 4.2,
    },
  ],
  Fashion: [
    {
      productName: "Jacket",
      category: "Fashion",
      quantity: 40,
      price: 120,
      rating: 4.8,
    },
    {
      productName: "Jeans",
      category: "Fashion",
      quantity: 45,
      price: 60,
      rating: 4.5,
    },
    {
      productName: "Handbag",
      category: "Fashion",
      quantity: 35,
      price: 70,
      rating: 4.3,
    },
  ],
  Furniture: [
    {
      productName: "Bed",
      category: "Furniture",
      quantity: 8,
      price: 800,
      rating: 4.9,
    },
    {
      productName: "Sofa",
      category: "Furniture",
      quantity: 10,
      price: 500,
      rating: 4.7,
    },
    {
      productName: "Coffee Table",
      category: "Furniture",
      quantity: 15,
      price: 300,
      rating: 4.6,
    },
  ],
  Photography: [
    {
      productName: "Tripod",
      category: "Photography",
      quantity: 20,
      price: 150,
      rating: 4.4,
    },
    {
      productName: "Camera Bag",
      category: "Photography",
      quantity: 12,
      price: 80,
      rating: 4.1,
    },
    {
      productName: "Flashlight",
      category: "Photography",
      quantity: 18,
      price: 20,
      rating: 4.0,
    },
  ],
};

```
<h2 style="color:#215dc8">Problem-4:</h2>

Implement a **`customSlice`** method, which behaves similarly to the built-in **`slice`** method for arrays. Your custom method should return a portion of the array, starting from the specified start index and ending before the specified end index.

Write a function **`customSlice`** that takes an array and two optional parameters (**`start`** and **`end`**) as input and returns a new array containing elements from the original array according to the specified range.

### **Expected Output**

```js
const array = [1, 2, 3, 4, 5];

// Extract elements from index 1 to index 3 (exclusive)
console.log(customSlice(array, 1, 3)); // Output: [2, 3]

// Extract elements starting from index 2 to the end of the array
console.log(customSlice(array, 2)); // Output: [3, 4, 5]

// Extract last two elements of the array
console.log(customSlice(array, -2)); // Output: [4, 5]

// Extract elements from index -3 to index -1
console.log(customSlice(array, -3, -1)); // Output: [3, 4]
```

#### The Problem is tested on CP

<img src="https://i.imgur.com/tVfGUkV.png" height="500px" />

### General guidelines
- Example inputs are just for example. The tests may check the functions by invoking them with different inputs of the same shape.
- Before writing a single line of code please read the problem statement very carefully.
- The system on cp.masaischool.com may take between 1-20 minutes to respond,
- so we request you to read the problem carefully and debug it before itself
- We also request you not just submit it last minute
- Try to keep one submission at a time
