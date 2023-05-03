/* Objective:
Given a random string captilize first letter, lowercase all, always add period at end. */

/* Variable */
/* *************************************** */
const sentence = "fOx jUmpS OVER the Lazy dOG";


/* Function */
/* *************************************** */
const convertSentence = (currentSentence="hello") => {
    const newSentence = 
        currentSentence[0].toUpperCase() + 
        currentSentence.slice(1).toLowerCase() + 
        ".";

    return newSentence;
}


/* Process */
/* *************************************** */
const newSentence = convertSentence(sentence);

/* Execute */
/* *************************************** */
console.clear();
console.log(`🔤 Sentence Converter`);
console.log(`---------------------------------`);
console.log(` Current: ${sentence}`);
console.log(`---------------------------------`);
console.log(` New: ${newSentence}`);
console.log(`---------------------------------`);
