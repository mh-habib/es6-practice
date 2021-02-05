//22-7// Class, constructor, create object from class

class Students{
    //Do not use function keyword before constructor or any methods
    constructor (studentId, studentName) {
        //Need to use this keyword before every properties
        this.id = studentId;
        this.name = studentName;
        //default for every objects student1,2,3,....,n
        this.school = 'kolimunnesa schooland college';
    }   
}
//Used to make several objects using same properties
const student1 = new Students(12, 'Nasim Saydat'); //Oblect
const student2 = new Students(22, 'Shuvro'); //Oblect
const student3 = new Students(32, 'Sakib Hasan'); //Oblect

//Same structure output for every object student1,2,3,....,n  
console.log(student1, student2);
console.log(student3);

//We can also call specific property for every object
console.log(student1.id, student1.name);
console.log(student3.name);
