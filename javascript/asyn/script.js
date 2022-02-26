//call back hell below
/*
function getRecipe(){
    setTimeout(() => {
        const recipeID = [523,883,432,974];
        console.log(recipeID);

        setTimeout((id) => {
            const recipe ={
                titile: 'Fresh Tomato',
                publisher: 'Sandeep'
            }
            console.log(`${id}: ${recipe.titile}`)
        }, 1000, recipeID[0]);

    }, 1500);
}

getRecipe();

*/

/*

//solution of call back hell === PROMISES

const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([523, 883, 432, 974]);
    }, 1500);
});

const getRecipe = recId => {
    return new Promise((resolve, reject) => {
        setTimeout((ID) => {
            const recipe = {
                titile: 'Fresh Tomato',
                publisher: 'Sandeep'
            };
            resolve(`${ID}: ${recipe.titile}`);
        }, 1500, recId);
    });
};

const getRelated = publisher =>{
    return new Promise((resolve,reject)=>{
        setTimeout((pub) => {
            const recipe= {titile:"fresh tomato",
            publisher: 'Andy Jurn'};
            resolve(`${pub}: ${recipe.titile}`);
        
        }, 1500,publisher);
    });
}


getIDs
    .then(IDs => {
        console.log(IDs);
        return getRecipe([IDs[2]]);
    })
    .then(recipe => {
        console.log(recipe);
        return getRelated('Andy Jurn');
    })
    .then(kuch =>{
        console.log(kuch);
    })
    .catch(error => {
        console.log(error);
    });

*/

    //Async and await ( these are for consuming promises not producing thme)

/*

async function gerRecipeAW(){
    const IDs = await getIDs;
    console.log(IDs);

    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);

    const related = await getRelated('Andy Jurn');
    console.log(related);
    return recipe;
}
 const rec = gerRecipeAW().then(result => console.log(`${result} is the best ever!`));

*/

fetch
("https://crossorigin.me/https://www.metaweather.com/api/location/2487956/")
.then(result =>{
    console.log(result);
})
.catch(error => console.log(error));

