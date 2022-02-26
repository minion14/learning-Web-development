// var markMass, markHeight, johnMass, JohnHeight,markBMI,johnBMI;
// markMass= 60;
// markHeight= 1.5;
// johnMass= 72;
// JohnHeight= 1.6;
// markBMI=markMass/(markHeight*markHeight);
// johnBMI=johnMass/(JohnHeight*JohnHeight);
// var ans= markBMI > johnBMI;
// console.log(markBMI);
// console.log(johnBMI);
// console.log('Is mark\'s BMI higher than John\'s? '+ans );

// var firstName = 'John';
// var age = 20;
// age >= 18 ? console.log(firstName+ ' drinks beer.') : console.log(firstName+ ' drinks juice');
// var drinks = age>=18? 'beer': 'juice';
// console.log(drinks);

// var john1,john2,john3,mike1,mike2,mike3,mary1,mary2,mary3;
// john1=100;
// john2=100;
// john3=100;
// mike1=100;
// mike2=200;
// mike3=200;
// mary1=97;
// mary2=100;
// mary3=105;
// var johnAvg=(john1+john2+john3)/3;
// var mikeAvg=(mike1+mike2+mike3)/3;
// var maryAvg=(mary1+mary2+mary3)/3;
// if(maryAvg>johnAvg&&maryAvg>mikeAvg){
//     console.log("mary wins match");
// }
// else if(johnAvg>maryAvg&&johnAvg>mikeAvg){
//     console.log("John wins match");
// }
// else if(johnAvg==maryAvg&&johnAvg===mikeAvg){
//     console.log("match drawn");
// }
// else {
//     console.log('mike wins match');
// }
// console.log(mikeAvg,johnAvg,maryAvg);

/*
functions 
*/
// function calculateAge(birthyear){
//     return 2022-birthyear;
// }
// console.log(calculateAge(1996));
// function yearsUntilRetirement(year, firstName){
//     var age= calculateAge(year);
//     var retirement= 60- age;
//     console.log(firstName+ ' retires in '+ retirement+' years');
// }
// yearsUntilRetirement(1996,'Sandeep');

//functions statements and Expression


//function expression
// var whatDoYouDo = function(job,firstName){

// }

// //function statement
// if(true){console.log('hello');}


// //Arrays
// var names = ['sandy','mary','jane'];
// var years = new Array(1990,1996,2002);
// console.log(names,names[2],names.length);

//coding challenge 2
// var bills = [124,48,268];
// var tips = new Array();
// var calculateTip = function(bill){
//     console.log('hello',bill);
//     switch(true){
//         case bill<50:
//             return bill*.2;
//         case bill>=50&&bill<=200:
//             return bill*.15;
//         case bill>200:
//             return bill*.1
//         default:
//             return false;
//     }
// }
// var finalBill = new Array();
// tips.push(calculateTip(bills[0]));
// tips.push(calculateTip(bills[1]));
// tips.push(calculateTip(bills[2]));
// finalBill[0]=bills[0]+tips[0];
// finalBill[1]=bills[1]+tips[1];
// finalBill[2]=bills[2]+tips[2];
// console.log(tips);
// console.log(finalBill);


// var john = {
//     firstName :'sandeep',
//     lastName : 'Kumar',
//     birthYear: 1996,
//     family : ['Krishna', 'Ruby', 'Pradeep'],
//     job : 'student',
//     isMarried : false,
//     calcAge: function(){
//         this.age = 2022 - this.birthYear;
//     }
// };
//  john.calcAge();
// console.log(john.age);


//coding challenge


// function calcBMI(mass,height){
//     console.log(mass,height);
//     return mass/(height*height);
// }

// var Mark ={
//     firstName: "Mark",
//     lastName:"Smith",
//     height: 1.5,
//     mass: 70,
//     calBMI:function(){
//         this.BMI = this.mass/(this.height*this.height);
//     }
// };
// var John ={
//     firstName: "John",
//     lastName:"Smith",
//     height: 1.5,
//     mass: 70,
//     calBMI:function(){
//         this.BMI = this.mass/(this.height*this.height);
//     }
// };
// Mark.calBMI();
// John.calBMI();
// if(Mark.BMI>John.BMI){
//     console.log(Mark.firstName+ ' '+Mark.lastName+' has BMI ='+ Mark.BMI);
// }
// else if (John.BMI>Mark.BMI){
//     console.log(John.firstName+' '+John.lastName+' has BMI ='+ John.BMI);
// }
// else{
//     console.log('both has same BMI of '+John.BMI);
// }

//loops and interation
// for(var i=0;i<5;i++){
//     console.log(i);
// }
// var i=0;
// while(i<5){
//     console.log(i++);
// }
function calculateTipForJohn(bill){
    if(bill<50){
        return .2*bill;
    }
    else if(bill>=50&&bill<=200){
        return .15*bill;
    }
    else{
        return .1*bill;
    }
}
var john={
    bills:[124,48,268,180,42],
    tips:[],
    finalBill:[],
    totalTip:0,
    calcTipJohn:function(){
        for(var i=0;i<this.bills.length;i++){
            this.tips[i]=calculateTipForJohn(this.bills[i]);
            this.totalTip+=this.tips[i];
            this.finalBill[i]=this.tips[i]+this.bills[i];
        }
    }
}
john.calcTipJohn();


//mark's family goes to restaurant

function calculateTipForMark(bill){
    if(bill<100){
        return .2*bill;
    }
    else if(bill>=100&&bill<=300){
        return .1*bill;
    }
    else{
        return .25*bill;
    }
}
var Mark={
    bills:[77,375,110,45],
    tips:[],
    finalBill:[],
    totalTip:0,
    calcTipMark:function(){
        for(var i=0;i<this.bills.length;i++){
            this.tips[i]=calculateTipForMark(this.bills[i]);
            this.totalTip+=this.tips[i];
            this.finalBill[i]=this.tips[i]+this.bills[i];
        }
    }
}
Mark.calcTipMark();
if(Mark.totalTip>john.totalTip){
    console.log("Mark\'s family gave "+(Mark.totalTip-john.totalTip)+" more tip ");
}
else{
    console.log("John\'s family gave "+ (john.totalTip-Mark.totalTip)+" more tip ");
}









