var printName = function(str){
    console.log(str);
}
printName("John")

var printDynamicType = function(param){
    console.log(typeof param);
}
printDynamicType(10); // Expected Output: number
printDynamicType("Hello"); // Expected Output: string

var printDataType = function(param){
    console.log(typeof param);
}

printDataType("Hello"); // Expected Output: string
printDataType(10); // Expected Output: number
printDataType(true); // Expected Output: boolean
printDataType([1, 2, 3]); // Expected Output: object
printDataType({ key: "value" }); // Expected Output: object
printDataType(null); // Expected Output: object
printDataType(undefined); // Expected Output: undefined

let printNullableType = function(param){
    if(param === null){
        console.log("null")
    }
    else{
        console.log(typeof param);
    }
}

printNullableType(null); // Expected Output: null
printNullableType(undefined); // Expected Output: undefined
printNullableType("Hello"); // Expected Output: string
printNullableType(10); // Expected Output: number

var checkTruthy = function(param){
    console.log(Boolean(param));
}
checkTruthy(""); // Expected Output: false
checkTruthy(0); // Expected Output: false
checkTruthy(null); // Expected Output: false
checkTruthy(undefined); // Expected Output: false
checkTruthy("Hello"); // Expected Output: true
checkTruthy(10); // Expected Output: true
checkTruthy({}); // Expected Output: true

var generateMessage = function(n,a,l){
    console.log(`My name is ${n}, I am ${a} years old, and my favorite programming language is ${l}`);
}
generateMessage("John", 25, "JavaScript"); // Expected Output: My name is John, I am 25 years old, and my favorite programming language is JavaScript.
