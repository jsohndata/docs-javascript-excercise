// Salad Bar
/* Objective: 
-----------------------------------------
1. Create a salad using and object.
2. Pass and object as argument.


Sample:
-----------------------------------------
const result = makeSalad(basket);


Result:
-----------------------------------------
🥗 = lettuce mix with tomato and pickle.
*/

function makeSalad(source) {
  const salad = `🥗 = ${source.ingrdient1} mix with ${source.ingrdient2} and ${source.ingrdient3}.`
  return salad;
}

const basket = {
  ingrdient1: "lettuce",
  ingrdient2: "tomato",
  ingrdient3: "pickle"
}

const result = makeSalad(basket);
console.log(results);