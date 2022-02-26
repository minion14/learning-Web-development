////important file hai ye 


//function contructor
/*
var john = {
   name: 'sandy',
   yearOfBirth: 1996,
   job: 'student' 
}

console.log(john);

var Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person.prototype.calAge = function(){
    console.log(2022-this.yearOfBirth);
}
Person.prototype.lastName = 'Kumar';

var pradeep = new Person('Pradeep',1995,'student'); 
var krishna = new Person('krishna',1969,'housewife');
var ruby = new Person('ruby',1992,'teacher'); 
pradeep.calAge();
krishna.calAge();
ruby.calAge();
console.log(pradeep.lastName);
console.log(ruby.lastName);
console.log(krishna.lastName);
*/

//object.create
/*

var personProto ={
    calcAge: function(){
        console.log(2022-this.yearOfBirth);
    }
}
var sandy = Object.create(personProto);
sandy.name = 'Sandeep';
sandy.yearOfBirth = 1996;
sandy.job = 'teacher';

var pradeep = Object.create(personProto,{
    name:{value:'Pradeep'},
    yearOfBirth:{value: 1995},
    job: {value: 'student'}
})
*/

//Primitives vs Objects

// primitives
// var a = 23;
// var b = a;
// a = 45;
// console.log(a,+' '+b);


//objects

/*
var obj1 ={
    name: 'sandy',
    age:26
};
var obj2 = obj1;
obj2.age=27;
console.log(obj1.age);
console.log(obj2.age);

//functions
var age=26;
var obj = {
    name : 'sandeep',
    city : 'lucknow'
};

function change(a,b){
    a = 30;
    b.name = 'Pradeep';
    b.city = 'Kanpur';
}
change(age,obj);

*/

//passing functions as arguments

var years = [1992,1995,1996,1999,2008];

function arrayCalc(arr, fun){
    var arrRes =[];
    for (var i=0;i<arr.length;i++){
        arrRes.push(fun(arr[i]));
    }
    return arrRes;
}
function calculateAge(el){
    return 2022-el;
}
function isFullAge(el){
    return el>=18;
}
function maxHeartRate(el){
    if(el>=18&&el<=81){
    return Math.round(206.9-(0.67*el));
    }
    else
    return -1;
}
var ages= arrayCalc(years,calculateAge);
console.log(ages);
var fullAges=arrayCalc(ages,isFullAge);
console.log(fullAges);
var hearRates = arrayCalc(ages,maxHeartRate);
console.log(hearRates);

//functions returning functions

function interviewQuestions(job){
    if(job==='designer'){
        return function(name){
            console.log('explain this UI/UX questions to me '+name);
        }
    }
    else if (job=='teacher'){
        return function(name){
            console.log('what subject do you teach, '+name);
        }
    }
    else {
        return function(name){
            console.log('what do you do '+name)
        }
    }
}

var questionTeacher = interviewQuestions('teacher');
questionTeacher('Priya');


//Immediately Invoked Function Expressions (IIFE)

function game(){
    var score = Math.random()*10;
    console.log(score>=5);
}
game();

//IIFE
(function(){
    var score= Math.random()*10;
    console.log(score>=5);
})()


//closures

function retirement(retirementAge){
    var a =' years left until retirement.';
    return function(yearOfBirth){
        var age= 2022-yearOfBirth;
        console.log((retirementAge-age)+a);
    }
}
var retirementUs = retirement(66);
retirementUs(1996);

retirement(66)(1995);

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1992);
retirementIceland(1989);

function QuestionsClo(job){
    var a = 'your job is ';
    return function(name){
        console.log(name+a+job);
    }
}
QuestionsClo('teacher')('sandeep ');


//Bind, call and apply

var sandy = {
    name : 'Sandeep',
    age: 26,
    job: 'teacher',
    presentation: function(style,timeOfDay){
        if (style==='formal'){
            console.log('Good '+timeOfDay+' Ladies and Gentlemen! I\'m '+ this.name
            +'. I am a '+this.job+' and I am '+this.age+' years old.');
        }
        else if (style==='friendly'){
            console.log('Hey what\'s up? I\'m '+ this.name+'. I\'m a '+this.job+' and I\'m '+ this.age+
            ' years old. Have a nice '+timeOfDay);
        }
    }
};
sandy.presentation('friendly','morning');

var pksong = {
    name: 'Pradeep',
    age:27,
    job: 'student'
};

sandy.presentation.call(pksong,'formal','Morning');
//sandy.presentation.apply(pksong,['frinedly','afternoon']);

var sandyFriendly= sandy.presentation.bind(sandy,'friendly');
sandyFriendly('morning');
sandyFriendly('afternoon');

//coding challenge 7

(function(){
    //var totalPoints =0;
function Questions(question,option,correct){
    this.question = question;
    this.option = option;
    this.correct = correct;
}

Questions.prototype.displayQuestion = function(sc) {
    console.log(currentQuestionNumber+' : '+this.question);
    currentQuestionNumber+=1;
    for(var i=0;i<this.option.length;i++)
    {
        console.log((i+1)+' : '+this.option[i]);
    }
}
Questions.prototype.AnswerCheck = function(ans,callBack){
    var sc;
    if (ans===this.correct){
        //totalPoints+=1;
        console.log('Correct Answer!');
        sc = callBack(true);
        //console.log('total Point '+totalPoints);
    }
    else if(ans==='exit'){
        console.log('thank You for Playing the Game  :)')
        sc = callBack(false);
    }
    else{
        console.log('Wrong Answer!');
        sc = callBack(false);
        //console.log('total Point '+totalPoints);
    }
    this.displayScore(sc);
}

Questions.prototype.displayScore = function(some){
    console.log("Your current score is : "+ some);
    console.log('------------------------------------------');

}

var currentQuestionNumber=1;
var question1 = new Questions('what is my favourite book?',['Harry Potter','Time of Wheel','Sherklock Homes'],'1');
var question2 = new Questions('which animal I like most?',['Cat','Dog','Cow'],'2');
var question3 = new Questions('Which language do I speak?',['English','Japanese','Hindi'],'3');
var allQuestions = [question1,question2,question3];
    //console.log(allQuestions);

function score(){
    var sc =0;
    return function(correct){
        if(correct){
            sc++;
        }
        return sc;
    }
}
var keepScore = score();

function nextQuestion(){

    var n =Math.floor(Math.random()*allQuestions.length);
    allQuestions[n].displayQuestion();
    var ans = prompt('Please enter correct answer');
    //allQuestions[n].AnswerCheck(ans);

    if(ans!=='exit'){
        allQuestions[n].AnswerCheck(ans,keepScore);
        nextQuestion();
    }
    else{
        //console.log('final total points are : '+totalPoints);
        console.log("Good Bye :)")
        allQuestions[n].AnswerCheck(ans,keepScore);
    }
}
nextQuestion();

//my solution
/* 
function startQuestinAsking(){
    while(curr===1){
        var i=Math.floor(Math.random()*allQuestions.length);
        console.log('Ques'+currentQuestionNumber+'. '+allQuestions[i].question);
        currentQuestionNumber+=1;
        for(var j=0;j<allQuestions[i].option.length;j++){
            console.log( (j+1)+')'+allQuestions[i].option[j])
        }
        let ans = prompt('Please Enter your answer.')
        //var tem = typeof ans;
        //console.log(ans,tem);
        //console.log(allQuestions[i].correct);
        if(ans==allQuestions[i].correct){
            totalPoints+=1;
            //console.log('kuch hua');
            console.log('correct answer');
            console.log('Your total points are: '+totalPoints);
        }
        else if(ans==='exit'){
            console.log('Your final total points are: '+totalPoints );
            curr=0;
        }
        else{
            console.log('incorrect answer.');
            console.log('Your total points are: '+totalPoints);
        }
    }
}

startQuestinAsking();
*/
})();