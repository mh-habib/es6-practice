//22-3//Default parameter
//Ancient procedure 
function add(num1, num2){
    if (num2 == undefined){
        num2 = 0;
    }
    return num1 + num2;
}
const total1 =add(5)
console.log(total1);

//Another way 
function add(num1, num2){
    num2 = num2 || 0;
    return num1 + num2;
}
const total2 = add(10);
console.log(total2);

//Latest method 
//Note: Empty string or array can also used as a default value  
function add(num1, num2 = 0){ 
    return num1 + num2;
}
const total3 = add(15);
console.log(total3);   