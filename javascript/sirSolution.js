class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;

    }
}

class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area;
        this.numTrees = numTrees;
    }
    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} Park has a tree density of ${density} trees per square KM.`)
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}

const allParks = [new Park('Gandhi', 1994, 2000, 900),
new Park('Sanjay', 1987, 4000, 100400),
new Park('Kasim', 1950, 5500, 80400)
]

const allStreets = [new Street('Kastubra', 1990, 96, 2),
new Street('LavKush', 2012, 180, 3),
new Street('Rajiv', 1980, 1000, 4),
new Street('Atal', 2008, 1200, 5)
]

function calc(arr) {

    const sum = arr.reduce((prev, curr, index) =>
        prev + curr, 0);
    return [sum, sum / arr.length];

}


function reportParks(p) {
    console.log('---------------- PARKS REPORT----------------');
    p.forEach(el => {
        el.treeDensity();
    });

    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} year.`)

    //which park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`)

}

function reportStreets(s) {

    console.log('----------------STREETS REPORT---------------');
    
    const [totalLength,avgLength] = calc(s.map(el=> el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength}, win an average of ${avgLength} KM.`)

    s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);
