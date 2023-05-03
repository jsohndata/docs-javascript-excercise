/* Objective
Create a function which returns the number of true values there are in an array.
const testArray = [ true, false, false, true, false, false, false, true, true, true, false ] */

/* Variable */
/* *************************************** */
const testArray = [ 
    true, 
    false, 
    true, 
    true, 
    false, 
    1,
    0,
    0,
    1,
    1,
    "true", 
    "false",
];

/* Function */
/* *************************************** */
const getTrueValue = (thisArray=[true,false]) => {
    let countTrue = 0;
    let countFalse = 0;

    for (let i = 0; i < thisArray.length; i++ ) {
        // (thisArray[i] === true) ? countTrue ++ : countFalse ++;
        switch (thisArray[i]) {
            case true:
            case 1:
            case "true":
                countTrue ++;
                break;

            case false:
            case 0:
            case "false":
                countFalse ++;
                break;
        }
    }

    return [countTrue, countFalse];
}

/* Process */
/* *************************************** */
const result = getTrueValue(testArray);
const [resultCountTrue, resultCountFalse] = result;

/* Process */
/* *************************************** */
console.clear();
console.log(`True or False`);
console.log(`---------------------------------`);
// Didn't use ${testArray} in :59 because it will display as a string
console.log(`Submitted (Total: ${testArray.length}):\n`);
console.log(testArray);
console.log(`\n`);
console.log(`True:\n${resultCountTrue}\n`);
console.log(`False:\n${resultCountFalse}`);