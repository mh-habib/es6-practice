//22.6//Joining array using concat() function
const ages1 = [12, 14, 16, 23]; 
const ages2 = [24, 18, 15]; 
const ages3 = [25, 28, 29, 36];
const allAges = ages1.concat(ages2).concat([5]).concat(ages3);
console.log(allAges);

// Joining array using three dots
const allAges2 = [...ages1, ...ages2, 8, ...ages3];
console.log(allAges2);

//Traditional Math.max method for three value
const a = 100;
const b = 200;
const c = 300;
const result = Math.max(a, b, c);
console.log(result);

//Math.max method for an array using three dots
const taka = [555, 395, 825, 574];
const result2 = Math.max(...taka);
console.log(result2);
