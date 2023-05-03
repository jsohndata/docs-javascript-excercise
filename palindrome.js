/* Objective: 
Check if a string is a palinadrome. */

/* Variable */
/* *************************************** */
const words = [
    "Wow",
    "RACEcar",
    "cvdewe3q",
    "deed",
    "noon",
    "stuff",
    "LEvEL",
    "Paladin",
    "RaDaR",
    "famous",
    "Taxi"

];

/* Function */
/* *************************************** */
const reverseString = string => {
    // Split string into an array
    let splitString = string.split("");

    // Reverse the order in array
    let reverseString = splitString.reverse();

    // Convert array value into a string
    let joinString = reverseString.join("");

    return joinString;
}

// const setLeadingZero = number => (number < 10) ? `0${number}` : number;    
const setLeadingZero = number => {
    switch (true) {
        case (number > 0) && (number < 10):
            numberDisplay = `   ${number}`;
            break;
        
        case (number >= 10) && (number < 100):
            numberDisplay = `  ${number}`;
            break;
        
        default:
            numberDisplay = `${number}`;
    }
    
    return numberDisplay;
}

const isPalindrome = wordList => {
    let result = "";

    for (let i = 0; i < wordList.length; i++) {  
        const eachWord = wordList[i].toLowerCase();
        const reverseWord = reverseString(eachWord);

        if (eachWord === reverseWord) {
            result = `✅ ${wordList[i]}`;
        } else {
            result = `❌ ${wordList[i]}`;
        }

        console.log(`${setLeadingZero(i+1)}) ${result}`);
    }
}

/* Execute */
/* *************************************** */
console.clear();
console.log(`🟡 Palindrome Checker`);
console.log(`---------------------------------`);
isPalindrome(words);
console.log(`---------------------------------`);
