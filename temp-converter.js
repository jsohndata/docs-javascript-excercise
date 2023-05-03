/* Objective: 
Write a temperature convertor. That converts from Celcius to Fahrenheit. */

/* Variable */
/* *************************************** */
const temperature = {
    number: 32,
    symbol: "F", //C or F
}

const {number, symbol} = temperature;

/* Function */
/* *************************************** */
const roundNumber = number => Math.round(number * 100) / 100;

const convertTemperature = (currentNum=1.00, currentSymbol="C") => {
    let newNum

    switch (currentSymbol) {
        // Convert C => F
        case "C":
            newNum = (currentNum * 9/5) + 32;
            break;
        
        // Convert F => C
        case "F":
            newNum = (currentNum - 32) * 5/9;
            break;
    }

    // Convert the the last symbol based on current symbol
    (currentSymbol === "C") ? otherSymbol = "F" : otherSymbol = "C";

    const message = `${roundNumber(currentNum)}°${currentSymbol} 👉 ${roundNumber(newNum)}°${otherSymbol}`;

    return message;
}

/* Process */
/* *************************************** */
const newTemperature = convertTemperature(number, symbol);

/* Execute */
/* *************************************** */
console.clear();
console.log(`🌡️  Temperature Converter`);
console.log(`---------------------------------`);
console.log(` ${newTemperature}`);
console.log(`---------------------------------`);
