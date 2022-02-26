class Parks {
    constructor(name, buildYear, parkArea, noOfTrees) {
        this.name = name;
        this.buildYear = buildYear;
        this.parkArea = parkArea;
        this.noOfTrees = noOfTrees;
        this.hasMoreThan1K = function () {
            if (this.noOfTrees > 1000) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    treeDensity() {
        return (this.noOfTrees / this.parkArea);
    }
    calculateAge() {
        var age = new Date().getFullYear() - this.buildYear;
        return age;
    }
}

class Streets {
    constructor(name, buildYear, length) {
        this.name = name;
        this.buildYear = buildYear;
        this.length = length;
        this.sizeClassification = function () {
            var status;
            (this.length > 0) ? status = true : status = false;
            if (status) {
                if (this.length < 100) { return 'tiny' };
                if (this.length > 100 && this.length <= 200) { return 'small' };
                if (this.length > 200 && this.length <= 500) { return 'normal' };
                if (this.length > 500 && this.length <= 1000) { return 'big' };
                if (this.length > 1000) { return 'huge' };
            }
            else {
                return 'normal';
            }

        }
    }

}

var park1 = new Parks('Gandhi', 1994, 2000, 900);
var park2 = new Parks('Sanjay', 1987, 4000, 100400);
var park3 = new Parks('Kasim', 1950, 5500, 80400);

console.log('-----------PARKS REPORT-------------');

var parksArrays = [park1, park2, park3];
var totalAge = 0, parksHaveMoreThan1000 = [];
parksArrays.forEach(function (curr, index) {
    console.log(`${curr.name} park has a tree density of ${curr.treeDensity().toFixed(2)} trees per square KM.`);
    if (curr.hasMoreThan1K()) {
        parksHaveMoreThan1000.push(curr.name);
    }
    totalAge += curr.calculateAge();
});
console.log(`Our 3 parks have an average of ${totalAge / parksArrays.length} years.`);

parksHaveMoreThan1000.forEach(function (curr) {
    console.log(`${curr} park has more than 1000 trees.`);
});

var Streets1 = new Streets('Kastubra', 1990, 96);
var Streets2 = new Streets('LavKush', 2012, 180);
var Streets3 = new Streets('Rajiv', 1980, 'unknown');
var Streets4 = new Streets('Atal', 2008, 1200);

var streetsArrays = [Streets1, Streets2, Streets3, Streets4];

console.log('-----------STREETS REPORT-------------');


//console.log(streetsArrays);

var totalStreetLength = 0, sizeClassOfStreet = [];
streetsArrays.forEach(function (curr) {
    if (curr.length !== 'unknown') {
        totalStreetLength += curr.length;
    }
    sizeClassOfStreet.push(curr.sizeClassification());

});
console.log(`Our ${streetsArrays.length} streets have a total of ${totalStreetLength} KM, with an average of ${totalStreetLength / streetsArrays.length} KM`);
streetsArrays.forEach(function (curr, index) {
    console.log(`${curr.name}, built in ${curr.buildYear}, is a ${sizeClassOfStreet[index]} street`);
});