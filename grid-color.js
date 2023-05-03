/* Objective: 
Given a number of rows and columns output a grid. */

/* Variable */
/* *************************************** */
const table = {
    symbolOdd: "👾",
    symbolEven: "🐙",
    tableRow: 20,
    tableCol: 20
};

const {symbolOdd, symbolEven, tableRow, tableCol } = table;

/* Function */
/* *************************************** */
const renderTable = (symbolOdd="🟢", symbolEven="🟠", tableRow=2, tableCol=2) => {

    // Render Row
    for (let r = 0; r < tableRow; r++) {
        let tableColRender = "";
        
        // Render Col
        // Short version: Let tableColRender = symbol.repeat(tableCol)
        
        let symbolDisplay = "";

        for (let c = 0; c < tableCol; c++ ) {

            switch(true) {
                case c % 2 === 0:
                    symbolDisplay = symbolEven;
                    break;

                case c % 2 === 1:
                    symbolDisplay = symbolOdd;
                    break;                    
            }
            
            tableColRender += `${symbolDisplay}`;
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
renderTable(symbolOdd, symbolEven, tableRow, tableCol);
console.log(`---------------------------------`);
