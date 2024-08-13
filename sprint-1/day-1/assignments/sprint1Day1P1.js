function calculateArea(l,w){
    return l*w;
}
console.log(calculateArea(5,4));

function checkValue(val){
    var msg ="";
    if(val===null){
        msg+= val+" is null";
    }
    else if(val===undefined){
        msg+= val+" is undefined";
    }
    else{
        msg+= val;
    }
    return msg;
}

console.log(checkValue(null));


function typeCheck(data){
    var msg = "";
    if(Array.isArray(data)){
        msg+= "type Array";
    }
    else if (data===null){
        msg+= "type null";
    }
    else{
        msg+= "type "+ typeof data;
    }
    return msg;
}
console.log(typeCheck([1,2,3]));

function generateEmail(n,domain){
    const na = n.split(" ");

    let email = `${na[0]}.${na[1]}@${domain}`;
    return email;
}

console.log(generateEmail("sunny kumar","example.com"));

function composeMessage(n,a,c){
    return `Hello ${n}, you are ${a} years old and live in ${c}.`;
}

console.log(composeMessage("sunny",25,"jalandhar"));