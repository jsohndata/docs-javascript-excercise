// I Want The Truth!
/* Objective: 
-----------------------------------------
1. Create a function that converts a string to a friendly sentnece.

• string method: toLowerCase(), toUpperCase()
• arrow function:
*/


const convertSentence = (text) => {
  const lowerText = text.toLowerCase();
  const upperFirstChar = lowerText[0].toUpperCase();
  const finalText = upperFirstChar + lowerText.substring(1);
  return finalText;
}

const sentence = "you cAn'T HanDlE thE tRuTh!"
const result = convertSentence(sentence);

// console.log("original:", sentence);
// console.log("--------------------");


console.log('😠 "I want the truth!');
console.log(`😡 "${result}`);
