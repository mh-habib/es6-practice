//22-9// Destructure, Object, array, destructure complex object
const person = {name: 'Jack William', age: 17, job: 'Facebookre', gfName: 'Ema Watson', address: 'Baridhara', phone: '01717112221', friends: ['Tom', 'Heary', 'William'] }
console.log(person.gfName);
console.log(person.friends);

//const gfName = person.gfName;
//const phone = person.phone;//Another Way
const { phone, gfName, age } = person;
console.log(gfName, phone);
console.log(gfName, phone);
console.log(phone, age);

const friends = ['Sakib Khan', 'Salman Khan', 'Shahrukh Khan', 'Amir Khan',];
//const [eka] = friends;
//const [eka, doka] = friends;
const [eka, doka, ...nextAll] = friends;
console.log(eka, doka);
//Use of three dots...
console.log(nextAll);


//Complex Object Example
const complexObject = {
    uName: 'abc',
    info: {
        roll: 170,
        phoneNo: '0173152'
    }
}
const {roll} = complexObject.info;
console.log(roll);
