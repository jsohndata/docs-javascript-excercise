/* Objective: 
Create a multiplication table. */

/* Variable */
/* *************************************** */
const number = [
    1,2,3,5,7,10,11,22,48,67
];

/* Function */
/* *************************************** */
const setLeadingZero = number => {
    switch (true) {
        case (number > 0) && (number < 10):
            numberDisplay = `   ${number}`;
            break;
        
        case (number >= 10) && (number < 100):
            numberDisplay = `  ${number}`;
            break;
        
        case (number >= 100) && (number < 1000):
            numberDisplay = ` ${number}`;
            break;
        
        default:
            numberDisplay = `${number}`;
    }
    
    return numberDisplay;
}

const setTable = (numberList) => {
    // Row
    for (let r = 0; r < numberList.length; r++ ) {
        
        // Col
        let eachCol = "";

        for (let c = 0; c < numberList.length; c++ ) {
            // via Squence: setColNum = setLeadingZero( (r + 1) * (c + 1) );
            setColNum = setLeadingZero( numberList[r] * numberList[c]  );
            eachCol += `[${setColNum}]`;
        }

        // Render Row
        // Checker: console.log(`[R ${r}] ${c} `);
        console.log(`${eachCol}`);
    }
}

/* Process */
/* *************************************** */


/* Execute */
/* *************************************** */
console.clear();
console.log(`🧮 Multiplication Table`);
console.log(`---------------------------------`);
setTable(number);
