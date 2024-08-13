// ## Problem 1 (Object to Object inheritance) :

// You have been given 3 objects `grand_father`, `father` & `son`. create the prototype chain between them according to the family tree.

const grand_father = {
  height: "tall",
  skin_tone: "fair",
  hair_color: "black",
  hair_type: "curly",
  greet: function () {
    return "Hello, I am the grand-father!";
  },
};

const father = {
  skin_tone: "brown",
  hair_type: "straight",
  skill: "business",
  dimple: true,
  greet: function () {
    return "Hello, I am the father!";
  },
};

const son = {
  height: "short",
  hair_type: "straight",
  hair_color: "blond",
  skill: "coding",
  greet: function () {
    return "Hello, I am the son!";
  },
};
//son from father 
Object.setPrototypeOf(son,father);
//father from grand-father
Object.setPrototypeOf(father,grand_father);

// console.log(grand_father.height); //tall
// console.log(grand_father.skin_tone); //fair
// console.log(grand_father.hair_color); //black
// console.log(grand_father.hair_type); //curly

// console.log(grand_father.greet()); //Hello, I am the grand-father!

// console.log(father.height); //tall
// console.log(father.skin_tone); //brown
// console.log(father.hair_color); //black
// console.log(father.hair_type); //straight
// console.log(father.skill); //business
// console.log(father.dimple); //true

// console.log(father.greet()); //Hello, I am the father!

// console.log(son.height); //short
// console.log(son.skin_tone); //brown
// console.log(son.hair_color); //blond
// console.log(son.hair_type); //straight
// console.log(son.skill); //coding
// console.log(son.dimple); //true

// console.log(son.greet()); //Hello, I am the son!

// ## Problem 2 (function to object inheritance) :
// - Create a `Mammal1` *factory function* that will take `has_skeliton` (Boolean), `has_fur` (Boolean), and `blood_type`, as parameters and create an object with these properties. and also have the following methods :
//    1. `makeSound` that **`returns`** `Mammal1 is making sound.`
//    2. `canEat` that will **`returns`**` ${name} can eat.`
//        - where name is taken as `input`
function Mammal1(has_skeliton,has_fur,blood_type) {
  // return object
  return {
    has_skeliton,
    has_fur,
    blood_type,
    makeSound:function(){
      return `Mammal1 is making sound.`
    },
    canEat:function(name){
      return ` ${name} can eat.`
    }
  }
}

// const dog = Mammal1(true, true, "warm");
// console.log(dog); //{ has_skeliton: true, has_fur: true, blood_type: 'warm' }
// console.log(dog.makeSound()); //Mammal1 is making sound.
// console.log(dog.canEat("Dog")); // Dog can eat.

// don't remove below export statement
export { grand_father, father, son, Mammal1 };
