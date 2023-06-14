/* Objective:
Write a function called combineTwoArrays that takes in two arrays as arguments, and returns a single array that combines both. */

/* Variable */
/* *************************************** */
const array1 = [
    'si',
    'vis',
    'pacem'
];

const array2 = [
    'para',
    'bellum'
];

/* Function */
/* *************************************** */
// From Friday Excercise D05-05-sentence.js
const convertSentence = (currentSentence="hello") => {
    const newSentence = 
        currentSentence[0].toUpperCase() + 
        currentSentence.slice(1).toLowerCase() + 
        ".";

    return newSentence;
}

const combineTwoArrays = (arrayOne, ArrayTwo) => {
    const result = [...arrayOne, ...ArrayTwo];

    return result;
}

/* Process */
/* *************************************** */
const result = combineTwoArrays(array1, array2).join(" ");
const resultFinal = convertSentence(result);

/* Execute */
/* *************************************** */
console.clear();
console.log(`Combine Array`);
console.log(`---------------------------------`);
console.log(`First Array:`);
console.log(array1,`\n`);
console.log(`Second Array:`);
console.log(array2);
console.log(`---------------------------------`);
console.log(`\nCombined:\n`,`${resultFinal}`);
