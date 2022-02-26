// //hoisting in function declaration
// calAge(1996);

// function calAge(year){
//     console.log(2022-year);
// }

// //hoisting in functino expression
// //retirement(1996);

// var retirement = function(year){
//     console.log(60-(2022-year));
// }

// //hoisting in variables

// console.log(age);
// var age=50;

// var a='Hello';
// First();
// function First(){
//     var b= ' Hi';
//     Second();
//     function Second(){
//         var c = ' Hey';
//         console.log(a+b+c);
//     }
// }


//creating phase === "This" keyword

//console.log(this);

// function calAge(year){
//     console.log(2022-year);
//     console.log(this);
// }
// calAge(1996);

var john ={
    name: 'john',
    yearOfBirth: 1996,
    calAge:function(){
        console.log(this.name);
        console.log(2022-this.yearOfBirth);
    }
}
john.calAge();

var mike ={
    name: 'mike',
    yearOfBirth: 1995
}
mike.calAge=john.calAge;
mike.age=mike.calAge();