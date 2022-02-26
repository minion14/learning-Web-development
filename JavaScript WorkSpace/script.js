
/*

function checkDriverAge(age) {
    if (age < 18) {
        alert("Sorry, you are too young to drive this car. Powering off");
    }
    else if (age == 18) {
        alert('Congratulations on your first year of driving. Enjoy the ride!');
    }
    else if (age > 18) {
        alert('Powering On. Enjoy the ride!');
    }
}

checkDriverAge(14);

var ageE = function(age){
    if(age<18) return 'Sorry, you are too young to drive this car. Powering off';
    else if(age==18) return 'Congratulations on your first year of driving. Enjoy the ride!';
    else if (age>19) return 'Powering On. Enjoy the ride!';
}

console.log(ageE(18));

*/

/*

var array = ["Banana", "Apples", "Oranges", "Blueberries"];
console.log(array);

array.shift();
console.log(array);

array.sort();
console.log(array);

array.push('Kiwi');
console.log(array);

array.splice(0,1);
console.log(array);

array.reverse();
console.log(array);

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(array2[1][1][0]);

*/


//background gradient generator 

/*
var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.querySelector('#bodywhole');

color1.addEventListener('input', function () {
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value+")";
});

color2.addEventListener('input', function () {
    body.style.background = "linear-gradient(to left," + color1.value + "," + color2.value+")";
});

*/

//exercise

//closures


const first = () => {
    const greet = "Hello";
    const second = () => {
        //alert(greet);
    }
    return second;
}
const myfun = first();
myfun();

const curriedMultiply = (a) => (b) => a * b;
let ans = curriedMultiply(3)(4);
console.log(ans);



const arrayN = [1, 2, 3, 4];

const double = [];
const newArray = arrayN.forEach(num => {
    double.push(num * 6);
});
console.log('forEach ' + double);

//map, filter, reduce

const mapArray = arrayN.map(num => num * 6);
console.log('map', mapArray);

const filterArray = arrayN.filter(num => num > 40);
console.log('filter ' + filterArray);

const reduceArray = arrayN.reduce((accumulator, num) => {
    return accumulator + num;
}, 51);
//5 above is accumalator value initial
console.log(reduceArray);


//exercise

//advanced arrays 

/*
const array = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },

];
const username=[];
const usernameArray = array.forEach(curr => {
    username.push(curr.username+'!');
})

console.log(username);

const mapUsername = array.map(curr => curr.username+'?');
console.log(mapUsername)

const filterUsername = array.filter(curr=> curr.team ==="red").map(curr => curr.username);
console.log(filterUsername);

const reduceScore = array.reduce((acc,curr)=>{
    return acc+curr.score;
},0);
console.log(reduceScore);


const arrayNum = [1,2,4,5,8,9];
// const neArray = arrayNum.map((num,i)=>{
//     console.log(num,i);
//     alert(num);
//     return num*2;
// });

const neArray = arrayNum.map(num=> num*2)
console.log(neArray);

const aarray=array.map(curr => {
    curr.items.map((c,i)=>{
        curr.items[i]=c+'!';
    });
});
console.log(array);

*/

/*

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
    sound() {
        console.log("I am a Cow.... Mooo");
        console.log(`My name is ${this.name} and I am a breed of ${this.type} and in color of ${this.color}.`);
    }
}

const cow = new Animal('Dolly', 'Persian', 'black and white');
cow.sound();

const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
console.log(dragons.includes('John'));

const findword = dragons.filter(curr => {
    if (curr.startsWith('John'))
        return curr;
});

console.log(findword);

function calculatePower(n) {
    console.log(Math.pow(100, n));
}
calculatePower(154);

//maximum can be 100^154


const startLine = '     ||<- Start line';
let turtle = '🐢';
turtle = '       ' + turtle;
let rabbit = '🐇';
rabbit = '       ' + rabbit;
console.log(startLine);
console.log(turtle);
console.log(rabbit);
turtle = turtle.trim().padEnd(9, '=');
console.log(turtle);


// #3) Get the below object to go from:
let obj = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}
// to this:
// 'my name is Rudolf the raindeer'
//kuch samaj ni aya 
console.log(Object.entries(obj).map(value => value.join(" ")).join(' '));


*/

amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}

function checkBasket(basket, lookingFor) {
    let a = 0;

    //below function is important

    Object.keys(basket).forEach(curr => {
        if (curr == lookingFor)
            a = true;
    });
    return a;
}
if (checkBasket(amazonBasket, 'floss'))
    console.log("found");
else
    console.log("Not found")

/*

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array1 = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
    let big=0;
    for(let i=0;i<arr.length;i++){
        big=big>arr[i]?big:arr[i];
    }
    return big;
}

function biggestNumberInArray2(arr) {
    let big=0;
    arr.forEach(curr=> big= big>curr?big:curr)
    return big;
}

function biggestNumberInArray3(arr) {
    let big=0;
    for(item in arr){
        big= big>arr[item]?big:arr[item];
    }
    return big;
}
console.log(biggestNumberInArray(array3));
console.log(biggestNumberInArray2(array3));
console.log(biggestNumberInArray3(array3));

*/


/*

// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]]

console.log(array.flat(2));


// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
let greetNewArray =[];
greeting.forEach(curr=>{
    let mid='';
    curr.forEach(c=>{
        mid+=' '+c;
    });
    greetNewArray.push(mid.trim());
});
console.log(greetNewArray);

//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
let greetSent ='';
greetNewArray.forEach(curr=> 
    {
        console.log(curr);
        greetSent+=' '+curr;
    });
console.log(greetSent.trim());


//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
console.log(trapped.flat(Infinity));


//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
const email = userEmail3.trim();
console.log(email);

//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }
const newUsers = Object.entries(users);
console.log(newUsers);


//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
newUsers.forEach(c => c[1]=c[1]*2);
console.log(newUsers);
//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
let oldObj=Object.fromEntries(new Map(newUsers));
console.log(oldObj);

*/

//flat method (helps in cleaning the data)

const array = [1, [[3], 4], 5, [[[[[5]]]]], 7];
array.flat();
console.log(array);

userProfiles = [['commanderTom', 23], ['sandy', 23], ['pradeep', 26]];
console.log(Object.fromEntries(userProfiles));

const detailedBasket = {
    apples: 10,
    oranges: 50,
    grapes: 1000
}
//below we are enumerating 

for (item in detailedBasket)
    console.log(item);






// Exercise 1: what do you think the MIN_SAFE_INTEGER is?
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

// Exercise 2: why does this throw an error? How can you fix it?
console.log(3n + 4n + 1n);

// Exercise 3: Clean up this code using optional chaining
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning',
        friend: {
            charizard: {
                species: 'Dragon Pokemon',
                height: 1.7,
                weight: 90.5,
                power: 'fire'
            }
        }
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: 0
    }
}

if (andrei_pokemon && andrei_pokemon.raichu && will_pokemon
    && will_pokemon.pikachu && will_pokemon.pikachu.friend
    && will_pokemon.pikachu.friend.charizard) {
    console.log('fight!')
} else {
    console.log('walk away...')
}

let message;
if (andrei_pokemon?.raichu && will_pokemon?.pikachu?.friend?.charizard)
    message = 'fight!';
else message = 'walk away...';
console.log(message);

console.log(andrei_pokemon?.raichu?.power ?? 'no power');

// Exercise 4: What do these each output?
console.log(false ?? 'hellooo')
console.log(null ?? 'hellooo')
console.log(null || 'hellooo')
console.log((false || null) ?? 'hellooo')
console.log(null ?? (false || 'hellooo'))


const flattened = [[0, 1], [2, 3], [4, 5]].reduce((a, b) => a.concat(b), [])
console.log(flattened);

(function displayMessage() {
    console.log('hello star ');
})();