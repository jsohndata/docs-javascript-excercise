/* Objective
Given any array of numbers (all will be > 0), write a function that returns the number of odd numbers in the array. */

/* Variable */
/* *************************************** */
const arrayInt = [2,5,7,11,13,21,22,55,66,13,14551,11];

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
    let arrayOdd  = [];
    let arrayEven = [];

    for (let i = 0; i < thisArray.length; i++) { 
        (thisArray[i] % 2 == 1 ) ? 
            arrayOdd.push(thisArray[i]) : 
            arrayEven.push(thisArray[i]);
    }

    return [arrayEven, arrayOdd];
}

/* Process */
/* *************************************** */
const result = sumArray(arrayInt);
const [resultArrayEven, resultArrayOdd] = result;


/* Execute */
/* *************************************** */
console.clear();
console.log(`Find Odd and Even Number`);
console.log(`---------------------------------`);
console.log(`Submitted Array:\n${arrayInt}\n`);
console.log(`Even Number:\n${resultArrayEven}\n`);
console.log(`Odd Number:\n${resultArrayOdd}`);
