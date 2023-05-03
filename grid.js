/* Objective: 
Given a number of rows and columns output a grid. */

/* Variable */
/* *************************************** */
const table = {
    symbol: "🧿",
    tableRow: 20,
    tableCol: 20
};

const {symbol, tableRow, tableCol } = table;

/* Function */
/* *************************************** */
const renderTable = (symbol="🟠", tableRow=2, tableCol=2) => {

    // Render Row
    for (let r = 0; r < tableRow; r++) {
        let tableColRender = "";
        
        // Render Col
        // Short version: Let tableColRender = symbol.repeat(tableCol)
        for (let c = 0; c < tableCol; c++ ) {    
            tableColRender += `${symbol}`;
        }

        // Final result
        console.log(`${tableColRender}`);
    }
}

/* Execute */
/* *************************************** */
console.clear();
console.log(`🏁 Grid: ${tableRow} x ${tableCol}`);
console.log(`---------------------------------`);
renderTable(symbol,tableRow,tableCol);
console.log(`---------------------------------`);
