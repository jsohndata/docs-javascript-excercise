/* Objective
Given an array of numbers, write a function to return the sum. */

/* Variable */
/* *************************************** */
const arrayInt = [0,1,1,2,3,5,8,13];
const arrayStr = [
    "The number zero arrived to West circa ", 1200,
    " by Italian mathematician Fibonacci."];
const arrayMix = [true, 2, 0.14159, "I <3 Pumpkin π ", 1, 3, 37];

/* Function */
/* *************************************** */
const setTotalSumType = (thisVar) => {
    const whatType = typeof thisVar;

    switch(whatType) {
        case "string": 
            totalSum = "";
            break;

        case "number": 
            totalSum = 0;
            break;

        case "boolean": 
            totalSum = false;
            break;            
    }
}

const sumArray = (thisArray=[1,2]) => {
    // let totalSum = undefined;
    // let totalSum = "";
    // let totalSum = null;
    // let totalSum = 0;
    // let totalSum;
    setTotalSumType(thisArray[0]);

    for (let i = 0; i < thisArray.length; i++) { 
        totalSum += thisArray[i];
    }    

    return totalSum;
}

/* Process */
/* *************************************** */
const resultInt = sumArray(arrayInt);
const resultStr = sumArray(arrayStr);
const resultMix = sumArray(arrayMix);

/* Execute */
/* *************************************** */
console.clear();
console.log(`🧮 Total Sum of an Array`);
console.log(`---------------------------------`);
console.log(`Integer Array:`, arrayInt);
console.log(`---------------------------------`);
console.log(`Total Sum:`, resultInt);
console.log(`---------------------------------\n\n`);

console.log(`---------------------------------`);
console.log(`String Array:`, arrayStr);
console.log(`---------------------------------`);
console.log(`Total Sum:`, resultStr);
console.log(`---------------------------------\n\n`);

console.log(`---------------------------------`);
console.log(`Mixed Array:`, arrayMix);
console.log(`---------------------------------`);
console.log(`Total Sum:`, resultMix);
console.log(`---------------------------------`);

