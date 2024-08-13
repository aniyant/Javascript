function subtract(a,b){
    if(Number(a) && Number(b)){
        return a-b;
    }else{
        return NaN
    }
}
console.log(subtract(10,5));

function greet(fn,ln,a){
    if(Number(a)){
        console.log(`${fn} ${ln}\'s age is ${a}`);
    }
    else{
        console.log(`${fn} ${ln}\'s age is 30`);
    }
}
greet("john",'doe',"30");

function interpolate(a,b){
    if(typeof a === 'number' && typeof b === 'number'){
        console.log(`${a} + ${b} = ${a+b}`);
    }
}

interpolate(5,3);