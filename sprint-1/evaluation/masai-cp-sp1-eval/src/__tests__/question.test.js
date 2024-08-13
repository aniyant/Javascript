import {
  findTotal,
  exampleInputArray,
  massageArray,
  advancedRearrange,
} from "../question1";
import {
  findDetails,
  calculateTotalRevenue,
  calculateAverageExamScore,
  findTopScorer,
  findPassingStudents,
} from "../question2";

import {
  findFrequency,
  getTotalSalaryByDepartment,
  customGroupAndSort,
  customSlice,
} from "../question3";

global.score = 1;

///*********************************************************Test cases for question1.js */
//0.5
describe("Question-1/Problem-1", () => {
  const arr1 = findTotal([
    {
      name: "student1",
      subjects: [
        { Maths: 60 },
        { History: 780 },
        { English: "50" },
        { Biology: "20" },
      ],
      total: "",
    },
    {
      name: "student2",
      subjects: [
        { Maths: "95" },
        { History: "26" },
        { English: "43" },
        { Biology: "50" },
      ],
      total: "",
    },
    {
      name: "student3",
      subjects: [
        { Maths: "67" },
        { History: "276" },
        { English: "453" },
        { Biology: "420" },
      ],
      total: "",
    },
  ]);
  test("checking array total amount in array", () => {
    expect(Array.isArray(arr1)).toBe(true);
    expect(arr1[0].total).toBe(910);
    expect(arr1[1].total).toBe(214);
    expect(arr1[2].total).toBe(1216);
    global.score += 1.5;
    // console.log("Q1-P1", global.score);
  });
});

//0.5
describe("Question-1/Problem-2", () => {
  const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  it("should remove elements from index 2 up to index 6 (inclusive) and insert them back in reverse order", () => {
    const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    const expectedOutput = [70, 60, 50, 40, 30, 10, 20, 80, 90, 100];

    const result = advancedRearrange(numbers);
    expect(result).toEqual(expectedOutput);
    global.score += 0.5;
  });

  it("should use the splice method for rearrangement", () => {
    const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    Array.prototype.splice = jest.fn(function (start, deleteCount, ...items) {
      const deletedItems = this.slice(start, start + deleteCount); // Simulate the behavior of splice
      const remainingItems = this.filter(
        (_, index) => index < start || index >= start + deleteCount
      ); // Remove the deleted items
      this.length = remainingItems.length; // Update the length of the array
      for (let i = 0; i < items.length; i++) {
        this[start + i] = items[i]; // Insert the new items at the specified index
      }
      return deletedItems; // Return the deleted items
    });

    advancedRearrange(numbers);
    expect(Array.prototype.splice).toHaveBeenCalled();
      global.score += 1;
  });

  // console.log("Q1-P2", global.score);
});
// //1.0
describe("Question-1/Problem-3", () => {
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

  let exampleInputArray2 = [
    {
      idProduct: "9TH GEN CORE I7",
      strProduct: "ASUS ROG STRIX SCAR III G531GU-ES016T GAMING LAPTOP",
      Category: 1,
      Area: 1,
      strSpecification1: "Processor",
      strSpecification2: "Generation",
      strSpecification3: "Cache",
      strSpecification4: "Core",
      strSpecification5: "Model",
      strSpecification6: "",
      strSpecification7: "",
      strSpecification8: "",
      strSpecification9: "",
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
      strDetail2: "9th Gen",
      strDetail3: "12 MB",
      strDetail4: "Hexa Core",
      strDetail5: "9750H",
      strDetail6: "",
      strDetail7: "",
      strDetail8: "",
      strDetail9: "",
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
      idProduct: "10TH GEN CORE I3",
      strProduct: "HP PAVILION X360 14-DH1008TU LAPTOP",
      Category: 2,
      Area: 2,
      strSpecification1: "",
      strSpecification2: "",
      strSpecification3: "",
      strSpecification4: "",
      strSpecification5: "",
      strSpecification6: "",
      strSpecification7: "Series",
      strSpecification8: "Speed",
      strSpecification9: "Cache",
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
      strDetail1: "",
      strDetail2: "",
      strDetail3: "",
      strDetail4: "",
      strDetail5: "",
      strDetail6: "",
      strDetail7: "Core i3",
      strDetail8: "2.1 GHz",
      strDetail9: "4 MB",
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
      idProduct: "9TH GEN CORE I5",
      strProduct: "DELL INSPIRON G3 3590 GAMING LAPTOP",
      Category: 3,
      Area: 1,
      strSpecification1: "Processor",
      strSpecification2: "Generation",
      strSpecification3: "",
      strSpecification4: "",
      strSpecification5: "",
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
      strDetail1: "Intel Core i5",
      strDetail2: "9th Gen",
      strDetail3: "",
      strDetail4: "",
      strDetail5: "",
      strDetail6: "NVIDIA",
      strDetail7: "Core i5",
      strDetail8: "2.4 GHz",
      strDetail9: "4.1 GHz",
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
  test("array returned by massageArray to have property-value as expected", function () {
    let o1 = massageArray(exampleInputArray);
    let o2 = massageArray(exampleInputArray2);

    expect(o1[0].productId).toBe("8TH GEN CORE I7");
    expect(o1[0].productTitle).toBe("ASUS ZENBOOK FLIP 13 UX362FA LAPTOP");
    expect(o1[0].Category).toBe("ASUS");
    expect(o1[0].MadeInArea).toBe("USA");

    expect(o2[1].productId).toBe("10TH GEN CORE I3");
    expect(o2[1].productTitle).toBe("HP PAVILION X360 14-DH1008TU LAPTOP");
    expect(o2[1].Category).toBe("HP");
    expect(o2[1].MadeInArea).toBe("USA");

    global.score += 1;
    // console.log("Q1-P3-1", global.score);
  });

  test("array returned by massageArray to be as expected", function () {
    let o1 = massageArray(exampleInputArray);
    expect(o1).toMatchObject(eo1);

    // let o2 = massageArray(exampleInputArray2);
    // expect(o2).toMatchObject(eo2);

    global.score += 1;
    // console.log("Q1-P3-2", global.score);
  });
});

// ///*********************************************************Test cases for question2.js */
// //1.0
describe("Question-2/Problem-1", () => {
  const mockService = {
    serviceName: "TastyBites Delivery",
    location: "Foodville",
    restaurants: {
      italianCorner: {
        menu: {
          pizza: { available: 40, price: 12 },
          pasta: { available: 74, price: 10 },
          salad: { available: 12, price: 8 },
        },
        orders: [
          { id: 1, items: ["pizza", "pasta"], total: 22 },
          { id: 2, items: ["salad", "pasta"], total: 18 },
          { id: 3, items: ["pizza"], total: 12 },
        ],
      },
      burgerJoint: {
        menu: {
          burger: { available: 41, price: 9 },
          fries: { available: 10, price: 4 },
          drink: { available: 20, price: 7 },
        },
        orders: [
          { id: 1, items: ["burger", "fries"], total: 12 },
          { id: 2, items: ["drink", "burger", "fries"], total: 14 },
          { id: 3, items: ["drink"], total: 7 },
        ],
      },
    },
    restaurantNames: ["italianCorner", "burgerJoint"],
  };
  it("Pizza Available ,Burger Available,Pizza Price, and Burger Price", () => {
    expect(findDetails(mockService).pizzaAvailable).toBe(40);
    expect(findDetails(mockService).burgerAvailable).toBe(41);
    expect(findDetails(mockService).pizzaPrice).toBe(12);
    expect(findDetails(mockService).burgerPrice).toBe(9);
    global.score += 1;
    // console.log("Q2-P1-1", global.score);
  });

  it("should calculate the total revenue correctly", () => {
    const totalRevenue = calculateTotalRevenue(mockService);
    expect(totalRevenue).toContain("85");
    global.score += 1;
    // console.log("Q2-P1-2", global.score);
  });
});
// //1.5
describe("Question-2/Problem-2", function () {
  const studentExamScores = [
    { name: "Alex", grades: [80, 92, 88, 95] },
    { name: "Eva", grades: [75, 88, 91, 79] },
    { name: "Max", grades: [90, 84, 87, 93] },
    { name: "Sophia", grades: [85, 89, 92, 78] },
    { name: "Oliver", grades: [88, 90, 85, 94] },
    { name: "Ava", grades: [76, 83, 88, 91] },
  ];

  test("To calculate average exam score", () => {
    // const checkthis = IkeaPurchase.toString();
    // expect(checkthis).not.toContain("this");

    expect(calculateAverageExamScore(studentExamScores, "Alex")).toBe(
      `Average Exam Score for Alex: 88.75`
    );
    global.score += 1;
    // console.log("Q2-P2-1", global.score);
  });

  test("to find the student with the highest average exam score", () => {
    expect(findTopScorer(studentExamScores)).toBe("Top Scorer: Oliver");
    global.score += 1;
    // console.log("Q2-P2-2", global.score);
  });

  test("to find an array containing the names of students who have passed", () => {
    let ansArr = findPassingStudents(studentExamScores);
    expect(Array.isArray(ansArr)).toBe(true);
    expect(JSON.stringify(ansArr)).toBe(
      JSON.stringify(["Alex", "Max", "Sophia", "Oliver"])
    );
    global.score += 1;
    // console.log("Q2-P2-3", global.score);
  });
});
// ///*********************************************************Test cases for question3.js */
// //1.5
describe("Question-3/Problem-1", function () {
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
  test("to find the frequency of iceCream in superheroIceCreamData", () => {
    let freq = findFrequency(superheroIceCreamData);
    expect(freq).toMatchObject(
      {
        Strawberry: 3,
        Vanilla: 4,
        Chocolate: 5,
        "Cookies & Cream": 2,
        "Mint Chocolate Chip": 3,
        "Rocky Road": 1,
        Pistachio: 1,
        Banana: 1,
        "French Vanilla": 1,
        "Vanilla Bean": 1,
      }
    );
    expect(freq["Mint Chocolate Chip"]).toBe(3);
    expect(freq["Chocolate"]).toBe(5);
    global.score += 3;
    // console.log("Q3-P1", global.score);
  });
});
// //1
describe("Question-3/Problem-2", () => {
  const employees = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Mary", salary: 60000, department: "HR" },
    { name: "Bob", salary: 70000, department: "IT" },
    { name: "Alice", salary: 80000, department: "Sales" },
    { name: "Peter", salary: 90000, department: "Sales" },
    { name: "Emma", salary: 55000, department: "IT" },
    { name: "David", salary: 65000, department: "HR" },
    { name: "Sophia", salary: 72000, department: "IT" },
    { name: "Michael", salary: 85000, department: "Sales" },
    { name: "Marry", salary: 90000, department: "HR" },
  ];
  test("to find the total salary of all employees in a given department", () => {
    const totalSalaryIT = getTotalSalaryByDepartment(employees, "IT");
    const totalSalarySales = getTotalSalaryByDepartment(employees, "Sales");
    const totalSalaryHR = getTotalSalaryByDepartment(employees, "HR");
    expect(totalSalaryIT).toEqual(247000);
    expect(totalSalaryHR).toEqual(215000);
    expect(totalSalarySales).toEqual(255000);
    global.score += 1;
    // console.log("Q3-P2-2", global.score);
  });
  it("should use filter method", () => {
    Array.prototype.filter = jest.fn(function (predicate) {
      if (this == null) {
        throw new TypeError(
          "Array.prototype.customFilter called on null or undefined"
        );
      }
      if (typeof predicate !== "function") {
        throw new TypeError("predicate must be a function");
      }
      const array = Object(this);
      const filteredArray = [];
      for (let i = 0; i < array.length; i++) {
        if (predicate.call(this, array[i], i, array)) {
          filteredArray.push(array[i]);
        }
      }
      return filteredArray;
    });
    getTotalSalaryByDepartment(employees, "IT");
    expect(Array.prototype.filter).toHaveBeenCalled();
    global.score += 0.5;
    // console.log("Q3-P2-1", global.score);
  });
  it("should use reduce method", () => {

    Array.prototype.reduce = jest.fn(function (callback, initialValue) {
      if (this == null) {
        throw new TypeError(
          "Array.prototype.customReduce called on null or undefined"
        );
      }
      if (typeof callback !== "function") {
        throw new TypeError("callback must be a function");
      }
      const array = Object(this);
      const len = array.length >>> 0;
      let accumulator = initialValue !== undefined ? initialValue : array[0];
      let startIndex = initialValue !== undefined ? 0 : 1;
      for (let i = startIndex; i < len; i++) {
        accumulator = callback.call(undefined, accumulator, array[i], i, array);
      }
      return accumulator;
    });
    getTotalSalaryByDepartment(employees, "IT");
    expect(Array.prototype.reduce).toHaveBeenCalled();
    global.score += 0.5;
    // console.log("Q3-P2-1", global.score);
  });
});
// //1
describe("Question-3/Problem-3",()=>{
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
  test("to group the products by their categories and sort in descending order of their rating.", () => {
    expect(customGroupAndSort(products)).toEqual(obj);
    global.score += 2;
    // console.log("Q3-P3",global.score)
  });
})
// //1
describe('Question-3/Problem-4/customSlice', () => {
  let flag = 0;
  it('should use custom implementation instead of built-in slice method', () => {
    // Create a sample array
    const arr = [1, 2, 3, 4, 5];
    Array.prototype.slice = jest.fn(function(start, end) {
      const array = this;
      const newArray = [];
      
      // Handle negative start index
      start = start >= 0 ? start : Math.max(array.length + start, 0);
      
      // Handle negative end index
      end = end >= 0 ? Math.min(end, array.length) : Math.max(array.length + end, 0);
      
      // Loop through the array and push elements to the new array within the specified range
      for (let i = start; i < end; i++) {
        newArray.push(array[i]);
      }
      
      return newArray;
    });
    // Call the customSlice function
    customSlice(arr, 2);

    // Assert that the built-in slice method is not called
    expect(Array.prototype.slice).not.toHaveBeenCalled();
    flag+=1; 
    flag===6?global.score+=2:global.score+=0;  
  });
  it('should return a portion of the array starting from the specified start index', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(customSlice(arr, 2)).toEqual([3, 4, 5]);
    flag+=1;
    flag===6?global.score+=2:global.score+=0;
  });

  it('should return a portion of the array starting from the specified start index and ending before the specified end index', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(customSlice(arr, 1, 4)).toEqual([2, 3, 4]);
    flag+=1;
    flag===6?global.score+=2:global.score+=0;
  });

  it('should handle negative start index', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(customSlice(arr, -3)).toEqual([3, 4, 5]);
    flag+=1;
    flag===6?global.score+=2:global.score+=0;
  });

  it('should handle negative end index', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(customSlice(arr, 1, -1)).toEqual([2, 3, 4]);
    flag+=1;
    flag===6?global.score+=2:global.score+=0;
  });

  it('should handle start index greater than end index', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(customSlice(arr, 3, 1)).toEqual([]);
    flag+=1;
    flag===6?global.score+=2:global.score+=0;
  });
 
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
