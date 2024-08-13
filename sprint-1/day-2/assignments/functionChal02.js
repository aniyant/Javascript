// Object Factory Function
function objectFactory(fname,age){
    var obj = {
        [fname]: age,
    }
    return obj;
}
console.log(objectFactory("John",25));

// Grade Classifier Function
function gradeClassifier(num){
    if(typeof num === 'number' && num <= 100){
        if(num>=90){
            return "A";
        }
        else if(num>=80){
            return "B";
        }
        else if(num>=60){
            return "C";
        }
        else if(num>=40){
            return "D";
        }
        else{
            return "F";
        }
   }
   else{
    return NaN;
   }
}
console.log(gradeClassifier(85));

// String Manipulator Function:
function stringManipulator(a,b){
    if(String(a) && String(b)){
        if(a.length == b.length ){
            console.log(a+b);
        }
        if(a.length < b.length){
            console.log(b+a);
        }
    } 
}
stringManipulator("hello","world");