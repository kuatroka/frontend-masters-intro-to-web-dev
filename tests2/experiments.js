// const monthlyRent = 2000;
// const yearlyRent = monthlyRent * 12;
// console.log(yearlyRent);

// console.log(`Hello from experiments, timn

// `);

// const firstName = 'Maria';
// const lastName = 'luisa';

// const sentence = 'Hello ' + firstName + ' ' + lastName + '! How is it hanging!?';
// const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How is it hanging!?`;

// console.log(sentence)

// console.log(sentenceWithTemplate)

///////////////////////////////////////
// const skyIsBlue = true;

// if (skyIsBlue & 3 + 3 === 6) {
//     console.log("nothing else matters");
//     console.log("The sky is blue!");
//     console.log(34 + 34);
// } else {
//     console.log('The sky is noooot blue today!');
// };

// const friendsAtYourParty = 4;

// if (friendsAtYourParty === 0) {
//     console.log('all toys are mine!');
// } else if  (friendsAtYourParty <= 4) {
//     console.log("well, let's play some D&D");
// } else {
//     console.log("parteyyyyy")
// }

// if (3 < 40 | 'aha' == 'a-ha') {
//     console.log("The sky is blue!")
// } else {
//     console.log('The sky is noooot blue today!')
// }

///////////////////////////////////////
// let friendsAtYourParty = 0;

// while (friendsAtYourParty < 20) {
// console.log("another friend comes in...");
// friendsAtYourParty = friendsAtYourParty + 1;
// }
// console.log(friendsAtYourParty);



// let friendsAtYourParty = 0;
// friendsAtYourParty += 10;
// friendsAtYourParty -= 1;
// friendsAtYourParty /= 1;
// friendsAtYourParty++;
// ++friendsAtYourParty;
// console.log(friendsAtYourParty)


// while (friendsAtYourParty < 20) {
// console.log("another friend comes in...");
// friendsAtYourParty = friendsAtYourParty + 1;
// }
// console.log(friendsAtYourParty);

// let friendsAtYourParty = 0;
// for (let i = 0; i < 10; i++) {
//     friendsAtYourParty++;
// }
// console.log(friendsAtYourParty);

// decreases by one
// let friendsAtYourParty = 0;
// for (let i = 10; i > 0; i--) {
//     friendsAtYourParty++;
// }
// console.log(friendsAtYourParty);

/////////////////////////


// let answer = '';
// const timesToRepeat = 100;
// const character = '😈👘';
// for (let i = 0; i < timesToRepeat; i++) {
//     answer += character;
// }
// console.log(answer);

// /////////////////////// the same as above

// console.log(''.padStart(timesToRepeat, character));

/////////////////////////
// function addTwo(number) {
//     return number + 2; 
// }
// const finalAnswer = addTwo(50);
// console.log(finalAnswer)

// const otherAnswer = addTwo(finalAnswer);
// console.log(finalAnswer)

////////////////
// function  greet(firstName, lastname, honorific, greeting) {
//     return `${greeting} ${honorific} ${lastname}! We are miffed to bits 
// for you ${firstName} to join us!`;
// }
// const greet1 = greet('Jack', 'Sparrow', 'Mon Capitan', 'Look here')
// console.log(greet1)

////////////////
// const chirp = (birdNoise) => {
//     console.log(' chirp churup...');
// }
// chirp()

// //////////////
// if (3 + 3 === 6) {
//     const thing  = 5;
//     console.log(thing)
// }
// console.log(thing)

//////////////////////

// const friendsAtYourParty = 56;
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// // console.log(i) - error of scope
// console.log(friendsAtYourParty)

///////////////////

// const A = 'A';
// let F;

// function doStuff(B) {
//     console.log(B);
//     const C = 'C';
//     let H = 'H';
//     if (1 + 1 === 2) {
//         const D = 'D';
//         H = 'something else';
//     }
//     console.log(D);
//     console.log(H);
//     F = 'F';
// }

// let E = 0;
// while (E < 3) {
//     E++;
//     console.log(A);
//     const G = 'G';
// }
// console.log(E);
// // console.log(G);

// doStuff('B');
// console.log(B)
// console.log(C)
// console.log(F)

///////////////////////////////////////

// const sentence = 'ThiS iS a weIrD tHinG';
// const lowerCaseSentence = sentence.toLowerCase();

// const UpperCaseSentence = sentence.toUpperCase()
// console.log(lowerCaseSentence)
// // console.log(UpperCaseSentence)

// const str = 'sdfsdsd'
// console.log(str.split('d'))
// console.log(str.startsWith('s'))
// console.log(str.replaceAll('s', '-'))
// console.log(str.substring(0,2))
// console.log(str[0])


///////////////////////////
// const number = 5.3;
// const roundedNumber = Math.round(number);
// const flooredNumber = Math.floor(number);
// const ceiledNumber = Math.ceil(number);
// console.log(roundedNumber);
// console.log(flooredNumber);
// console.log(ceiledNumber);
// console.log(Math.random());

// console.log('trust in me'.includes('me'))

////////////////////////

// const   person = {
//     name: 'Brian',
//     city: 'Sattle',
//     state: 'WA',
//     favoriteFood: '🍌',
//     wantsBananaNow: true,
//     numberOfBananas: 100,
// };

// propName = 'state'
// console.log(person)
// console.log(person.favoriteFood)
// console.log(person.numberOfBananas)
// console.log(person['name'])
// console.log(person[propName])


///////////////////
// const person1 = {
//     name: 'Angie',
//     ageRange: '25-35',
// };

// const person2 = {
//     name: 'Francesca',
//     ageRange: '65-75',
// };

// function suggestMusic(person) {
//     if (person.ageRange === '25-35') {
//         console.log('You like Daft Punk');
//     } else if (person.ageRange === '65-75') {
//         console.log('You will like Johnny Cash');
//     } else {
//         console.log('Uh.. maybe Metallica?');
//     }
// }
// suggestMusic(person1) 
// suggestMusic(person2) 

// ///////////////////////

// const dog = {
//     name: 'Chester',
//     speak() {
//         console.log('woof woof');
//     },
// };

// const dog = {
//     name: 'Chester',
//     speak: function() {
//         console.log('woof woof');
//     },
// };

// dog.speak()

/////////////////////
// const me = {
//     name: {
//         first: 'Brian',
//         last: 'Holt',
//     },
//     location: {
//         streetNumber: 500,
//         street: 'Elm Street',
//         city: 'Seattle',
//         country:"USA",
//     },
//     getAddress() {
//         return `${this.name.first} ${this.name.last} 
// ${this.location.streetNumber} ${this.location.street}
// ${this.location.city}, ${this.location.country}`;
//     },
// };
// console.log(me.getAddress());
// console.log(me.name.first);

// const pulledOutGetAddress = me.getAddress.bind(me);
// console.log(pulledOutGetAddress());





// console.log(me.location.city);

/////////////////////////////

// function getAddress() {
//     return `${this.name.first} ${this.name.last} 
//     ${this.location.streetNumber} ${this.location.street}
//     ${this.location.city}, ${this.location.country}`;
// };

/////////// Arrays
// const daysOfWeek = [
//     'Monday', 
//     'Tuesday', 
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//     'Sunday',
// ];
// console.log(daysOfWeek);
// console.log(daysOfWeek[0]);
// console.log(daysOfWeek[3]);

// const primeNumbers = [1,2, 3, 5, 7, 11, 13, 17];
// console.log(primeNumbers.length);
// console.log(primeNumbers.join(' | '));


// const courses = [
//     {teacher: 'Will Sentance', course: 'Javascript'},
//     {teacher: 'Sarah Drasner', course: 'CSS'},
// ]

// console.log(courses)
// console.log(courses.length)

// // add items to the array
// courses.push({teacher: 'Matt Something', course: 'Python'})
// console.log(courses)

// courses.push({teacher: 'Bonobo the Ape', course: 'flirting'})
// console.log(courses)
// console.log(courses.length)

// courses[2] = {teacher: 'Cesar the monkey', course: 'flirting with monkey'}
// console.log(courses.length)
// console.log(courses)

// courses[2].course = 'Monkeying around'

// // remove the last element from the array
// courses.pop();
// console.log(courses)

// const last_element = courses.pop();
// console.log(last_element);

// console.log(courses.shift());
// console.log(courses.unshift());


// // #############
// const cities = ['Seattle', 'San Fran', 
// 'Salt Lake', 'Amsterdam',
// 'Hong Kong'];

// // method 1 
// for (let i = 0; i < cities.length; i++) {
//     console.log(i, cities[i]);
// };

// cities.forEach(console.log);


// // let timesCalled = 0;
// // cities.forEach(function (city) {
// //     console.log(timesCalled, city);
// //     timesCalled++;
// // });

// ///

// let timesCalled = 0;
// function printCity(city) {
//     console.log(timesCalled ,city);
//     timesCalled++;
// };

// cities.forEach(printCity);

const redSquare = document.querySelector('.red-square');
redSquare.style.backgroundColor = 'teal';


///
const button = document.querySelector('.event-button');
button.addEventListener('click', function() {
    alert('Hey Jude...');
});

///
// const input = document.querySelector('.input-to-copy');
// const paragraph = document.querySelector('.p-to-copy-to');

// input.addEventListener('keyup', function() {
//     paragraph.innerText = input.value;
// });

///
const input = document.querySelector('.color-input');
const paragraph = document.querySelector('.color-box');

input.addEventListener('keyup', function() {
    paragraph.style.backgroundColor = input.value;
});

// 'change'

