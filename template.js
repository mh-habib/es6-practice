//22-4// Template  
const firstName = 'Monira';
const lastName = 'Khatun';
//Normal method
const fullName1 = firstName + ' ' + lastName + 'ia a good girl.' ;
console.log(fullName1);

//es-6 template method
const fullName2 = `${firstName} ${lastName} is a student.`;
console.log(fullName2);

//Ancient method for multiline method
const multiLine1 = "Monira Khatun Is a good girl.\n" + "She is a student.";
console.log(multiLine1);

//es-6 template method for multiline method
const multiLine2 = `Monira Khatun Is a good girl. 
She is a student;`
console.log(multiLine2);


