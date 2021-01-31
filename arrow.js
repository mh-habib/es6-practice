//22-5//Arrow function
//Traditional function declaration
function doubleIt(num){
    return num * 2;
}
const result = doubleIt(5);
console.log(result);

//Function declaration like variable
//const tripleIt = function (num){ //Another way
const tripleIt = function myFunc(num){
    return num * 3;
}
const result1 = tripleIt(4);
console.log(result1);

//Single argument arrow function
const doubleItNow = num => num * 2;
const result2 = doubleItNow(7);
console.log(result2);

//Multi arguments arrow function
const add = (num1, num2) => num1 + num2;
const result3 = add(8, 8);
console.log(result3);

//without arguments arrow function
const give20 = () => 20;
const result4 = give20();
console.log(result4);

//Multi line arrow function
const multiCalculation = (x, y) => {
    const sum = x + y;
    const sub = x - y;
    const result5 = sum * sub;
    return result5;
}
const result5 = multiCalculation(7, 5);
console.log(result5);
