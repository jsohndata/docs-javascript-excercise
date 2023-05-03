// Pie Factory
/* Objective: 
-----------------------------------------
1. Create a function that generates pie emoji.
2. Repeat the string as much as the quanity of the order.

Sample:
-----------------------------------------
const result = makePie(10);

Result:
-----------------------------------------
🥧 🥧 🥧 🥧 🥧 🥧 🥧 🥧 🥧 🥧 
*/


function makePie(quantity) {
  const pieOrder = '🥧 '.repeat(quantity);
  return pieOrder;
}

const result = makePie(10);
console.log(result);