/* Objective: 
Covert a currency to USD. */

/* Variable */
/* *************************************** */
const currency = {
    number: 1000,
    symbol: "ADA", //BTC, ETH, ADA
}

const {number, symbol} = currency;

/* Function */
/* *************************************** */
const roundNumber = number => Math.round(number * 100) / 100;

const convertCrypto2USD = (currentNum=1.00, currentSymbol="BTC") => {
    let newNum

    switch (currentSymbol) {
        case "BTC":
            newNum = currentNum * 20964.90;
            break;
        
        case "ETH":
            newNum = currentNum * 1564.16;
            break;

        case "ADA":
            newNum = currentNum * 0.37;
            break;            
    }

    const message = `${roundNumber(currentNum)} ${currentSymbol} 👉 ${roundNumber(newNum)} USD`;

    return message;
}

/* Process */
/* *************************************** */
const result = convertCrypto2USD(number, symbol);

/* Execute */
/* *************************************** */
console.clear();
console.log(`💰 Crypto to USD Converter (BTC, ETH, ADA)`);
console.log(`---------------------------------`);
console.log(` ${result}`);
console.log(`---------------------------------`);
