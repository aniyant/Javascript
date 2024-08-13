// ## Problem 3 (function-to-function inheritance) :
// - Create a `Mammal2` *factory function* that will take `has_skeliton` (Boolean), `has_fur` (Boolean), and `blood_type`, as parameters and create an object with these properties. and also have the following methods :
// 1. `makeSound` that **`returns`** `Mammal2 is making sound.`
// 2. `canEat` that will **`returns`** `${name} can eat.`
//     - where name is taken as `input` 

// - add these methods to the prototype of the `Mammal2` function and create the chain so that every object created by this `Mammal2` factory function can access all these methods.

// - **`return`** the object created from `Mammal2` *factory function*.


Mammal2.prototype.makeSound = function(){
    return `Mammal2 is making sound.`;
};
Mammal2.prototype.canEat = function(name){
    return `${name} can eat.`;
};

function Mammal2(has_skeliton,has_fur,blood_type) {
    //let this = {};
    this.has_skeliton = has_skeliton;
    this.has_fur = has_fur;
    this.blood_type = blood_type;
}

// var exampleMammal = new Mammal2(true, true, "warm-blooded");

// //propertites
// console.log(exampleMammal.has_skeliton); // true
// console.log(exampleMammal.has_fur); // true
// console.log(exampleMammal.blood_type); // warm-blooded

// //methods
// console.log(exampleMammal.makeSound()); // Mammal2 is making sound.
// console.log(exampleMammal.canEat("Bobcat")); // Bobcat can eat.
// - Create one factory function named `createHuman` that will take`has_skeliton`(Boolean), `has_fur`(Boolean),` `blood_type`, `name`, `height`, `skintone`, `gender`, and `hair_type, as parameters and create an object.

// This object should have methods -:

//    1. `canSpeak` that will **`returns`** `${name} can speak.`
//    2. `canDream` that **`returns`** `${name} can dream.`

// **Note:**  **All these methods should not be directly accessible instead add these methods to the prototype of the function.**

// - now create the prototype chain between `Mammal2` and `createHuman` so that `Human` can use `Mammal2’s` methods.

createHuman.prototype.canSpeak = function(){
    return `${this.name} can speak.`;
};
createHuman.prototype.canDream = function(){
    return `${this.name} can dream.`;
};

function createHuman(has_skeliton,has_fur,blood_type, name, height, skintone, gender,hair_type,) {
    Mammal2.call(this,has_skeliton,has_fur,blood_type);
    
    this.name = name;
    this.height = height;
    this.skintone = skintone;
    this.gender = gender;
    this.hair_type = hair_type;
}
Object.setPrototypeOf(createHuman.prototype,Mammal2.prototype);

// var exampleHuman = new createHuman(
//   true,
//   false,
//   "warm-blooded",
//   "Alice",
//   160,
//   "fair",
//   "female",
//   "straight"
// );

// // Propertites
// console.log(exampleHuman.has_skeliton); // true
// console.log(exampleHuman.has_fur); // false
// console.log(exampleHuman.blood_type); // warm-blooded

// // Methods
// console.log(exampleHuman.makeSound()); // Mammal2 is making sound.
// console.log(exampleHuman.canEat("Burger")); // Burger can eat.
// console.log(exampleHuman.canSpeak()); // Alice can speak.
// console.log(exampleHuman.canDream()); // Alice can dream.


// - Create another factory function named `createEmployee` that will take`has_skeliton`(Boolean), `has_fur`(Boolean), `blood_type`, `name,` `height`, `skintone`, `gender`, `hair_type`, `salary`, `position`, and `experience`, as parameters and create an object.
  
// This object should have methods

// 1. `handleTeam` that will **`returns`** `${name} can handle team.`
// 2. `doMarketing` that will **`returns`** `${name} is good at marketing.`

// - **Note:**  **All these methods should not be directly accessible instead add these methods to the prototype of the function.**

// - now create the prototype chain between `createHuman` and `createEmployee` so that `employees` can use `human` methods.
// createEmployee factory function
createEmployee.prototype.handleTeam = function(){
   return `${this.name} can handle team.`
}
createEmployee.prototype.doMarketing = function(){
    return `${this.name} is good at marketing.`
}
function createEmployee(has_skeliton,has_fur,blood_type, name, height, skintone, gender, hair_type, salary, position,experience) {
    createHuman.call(this,has_skeliton,has_fur,blood_type,name, height, skintone, gender,hair_type);
    this.salary = salary;
    this.position = position;
    this.experience = experience;
}
Object.setPrototypeOf(createEmployee.prototype,createHuman.prototype);
// // Create an employee object
// const employee = new createEmployee(
//   true,
//   true,
//   "A",
//   "John",
//   180,
//   "Fair",
//   "Male",
//   "Straight",
//   50000,
//   "Manager",
//   "5 years"
// );

// // // propertites

// console.log(employee.has_skeliton); // true
// console.log(employee.has_fur); // true
// console.log(employee.blood_type); // A
// console.log(employee.name); // John
// console.log(employee.height); // 180
// console.log(employee.skintone); // Fair
// console.log(employee.gender); // Male
// console.log(employee.hair_type); // Straight
// console.log(employee.salary); // 50000
// console.log(employee.position); // Manager
// console.log(employee.experience); // 5 years

// // // methods
// console.log(employee.makeSound()); // Mammal2 is making sound.
// console.log(employee.canEat("John")); // John can eat.
// console.log(employee.canSpeak()); // John can speak.
// console.log(employee.canDream()); // John can dream.
// console.log(employee.handleTeam()); // John can handle team.
// console.log(employee.doMarketing()); // John is good at marketing.


// don't chnage below export statement
export { Mammal2, createEmployee, createHuman };
