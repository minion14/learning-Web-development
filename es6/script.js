/*
{
const a =1;
let b =2;

}
console.log(a+b);
*/

//strings

/*
let firstName = 'Sandeep';
let lastName = 'Kumar';
const yearOfBirth = 1996;

function calcAge(year){
    return 2022-year;
}
//es5
console.log('This is '+firstName+' '+lastName+'. He was born in '+ yearOfBirth+'. Today, he is '+calcAge(yearOfBirth)+' years old.');


//es6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('S'));
console.log(n.endsWith('r'));
console.log(n.includes('Z'));
console.log(`${firstName} ` .repeat(5));


//Arrow function

const year = [1992,1995,1996,2004];

//es5
var ages5 = year.map(function(el){
    return 2022-el;
});
console.log(ages5);

//es6

var ages6 = year.map(el => 2022-el);
console.log(ages6);


//Arrow functions with this keyword

//es5 

var box5 ={
    color: 'green',
    position : 1,
    clickme : function(){
        var self = this;
        document.querySelector('.green').addEventListener('click',function(){
            var str = 'This is box number ' + self.position+' and it is '+self.color;
            alert(str);
        })
    }
}
//box5.clickme();

//es6 

const box6 ={
    color: 'green',
    position : 1,
    clickme : function(){

        document.querySelector('.green').addEventListener('click',() => {
            var str = 'This is box number ' + this.position+' and it is '+this.color;
            alert(str);
        })
    }
}
box6.clickme();


//prototype

//es5

function Person(name){
    this.name = name;
}

Person.prototype.myFriends = function(friends){

    var arr = friends.map(function(el){
        return this.name + ' is friends with '+el;
    }.bind(this));
    console.log(arr);
}
var friends = ['Bob','Jane','Mark'];
new Person('Sandeep').myFriends(friends);

//es6

Person.prototype.myFriends = function(friends){

    var arr = friends.map((el)=> `${this.name} is friends with ${el}`);
    console.log(arr);
}
var friends6 = ['Bob','Jane','Mark'];
new Person('Smith').myFriends(friends6);


*/

/*

//destructuring

//es5

var john =['sandeep',26];
//var name = john[0];
//var age = john[1];

//es6

const [name, age] = ['john', 26];
console.log(name);
console.log(age);

const obj ={
    firstName : 'john',
    lastName : 'smith'
};

const{firstName, lastName} =obj;
console.log(firstName);
console.log(lastName);

const{firstName:a, lastName: b} = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year){
    const age = new Date().getFullYear()-year;
    return [age, 65-age];
}
const [age2, retirement] = calcAgeRetirement(1996);
console.log(age2);
console.log(retirement);


*/

//Arrays 
const boxes = document.querySelectorAll('.box');
console.log(boxes);

//es5

var boxArrays5 = Array.prototype.slice.call(boxes);
boxArrays5.forEach(function (curr) {
    curr.style.backgroundColor = 'brown';
});
const boxes6 = Array.from(boxes);
Array.from(boxes).forEach(curr =>
    curr.style.backgroundColor = 'dodgerblue'
);


// es5
/*
for (var i=0;i<boxArrays5.length;i++){
    if(boxArrays5[i].className === 'box blue'){
        continue;
    }
    boxArrays5[i].textContent = 'I am changed to blue';
}
*/

for (const curr of boxes6) {
    if (curr.className === 'box blue') {
        continue;
    }
    curr.textContent = 'I again changed to something!';
}


// es5

var ages = [12, 18, 14, 17, 43, 23, 56, 13];
var full = ages.map(function (curr) {
    return curr >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// es6

console.log(ages.findIndex(curr => curr >= 18));
console.log(ages.find(curr => curr >= 18));



//Spread operator


//es5

function addFourAges(a, b, c, d) {
    return a + b + c + d;
}
var newAges = [18, 14, 66, 34];

var sumEs5 = addFourAges(18, 14, 66, 34);
console.log(sumEs5);
var sum2 = addFourAges.apply(null, newAges);
console.log(sum2);

//es6

const sum3 = addFourAges(...newAges);
console.log(sum3);

const familySmith = ['sandeep', 'ruby', 'pradeep', 'krishna'];
const familyJohn = ['ram', 'prem', 'shivkumar', 'khaga'];
const bigFamily = [...familyJohn, ...familySmith];
console.log(bigFamily);


//Rest parameters 

//es5

function isFullAge5() {

    //console.log(arguments);
    var argArr = Array.prototype.slice.call(arguments);
    argArr.forEach(function (curr) {
        console.log((2022 - curr) >= 18);
    });
}
isFullAge5(2009, 1995, 2008);

//es6

function isFullAge6(limiit, ...years) {
    years.forEach(curr => console.log((2022 - curr) >= limiit));
}
isFullAge6(20, 2009, 1995, 2008);



//maps 

const question = new Map();
question.set('question', 'what is official name of the latest javaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'correct answer');
question.set(false, 'wrong answer. Try again');
console.log(question.get('question'));
console.log(question.size);

question.forEach((value, key) => console.log(`this is ${key}, and it\'s set to value ${value}`));

for (let [key, value] of question.entries()) {
    if (typeof (key) === 'number') {
        console.log(`this is ${key}, and it\'s set to value ${value}`)
    }
};

//const ans = parseInt(prompt('write answer of question ...'));

//console.log(question.get(ans === question.get('correct')));


//class

//ES5

var Person5 = function(name, yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job= job;
}
Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
};

var sandeep5 = new Person5('Sandeep',1996,'student');
//console.log(sandeep5);
sandeep5.calculateAge();

//ES6

class Person6 {
    constructor (name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting(){
        console.log('Hey there!');
    }

}
var sandeep6 = new Person6('Sandeep',1996,'teacher');
//console.log(sandeep6);
sandeep6.calculateAge();
Person6.greeting();

//inheritance between classes

//ES5

//connecting two funtion constructor
var Athelete5 = function(name,yearOfBirth,job, olympicGames,medals){
    Person5.call(this,name,yearOfBirth,job);
    this.olympicGames = olympicGames;
    this.medals= medals;
};

//connecting two prototype 
Athelete5.prototype = Object.create(Person5.prototype);

Athelete5.prototype.wonMedal = function(){
    this.medals++;
    console.log(this.medals);
};

var sandeepAthelete5 = new Athelete5('sandeep',1996,'swimmer',3,10);
console.log(sandeepAthelete5);
sandeepAthelete5.wonMedal();


//ES6

class Athelete6 extends Person6 {
    constructor(name,yearOfBirth,job,olympicGames,medals){
        super(name,yearOfBirth,job);
        this.olympicGames =olympicGames;
        this.medals = medals;
    }
    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}

const sandeepAthelete6 = new Athelete6('sandeep',1996,'student',4,12);
sandeepAthelete6.wonMedal();
sandeepAthelete6.calculateAge();






