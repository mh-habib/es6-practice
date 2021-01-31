//22-2//constant value must not be changed
const hubby ="Md.Habibullah";
//hubby ="MH Habib"; Not valid to replace value
console.log(hubby);

const numbers = [12, 45];
numbers.push(88); //valid operation
numbers[1] = 66; //valid operation
//numbers = ['sun', 'moon', 'light']; Not valid to replace the numbers 
console .log(numbers);

//Key's value can be change but but not variable
const nayok = {namr:'Sakib Hasan', phone: 45976};

//let permits to change the value of a variable
let patent = 'Rahim Mia';
    patent = 'Abdur Rahaman'; //valid
console.log(patent);
//var element = 0;
for (let i = 0; i < 10; i++) {
    //const element = element + i; Constant element must not be changed
    let element = 0; //Not access from outside
    var v = 10; //Access from outside
    element = element + i;
}
console.log(v);  
//console.log(element);  



