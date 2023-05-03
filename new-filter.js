/* Objective:
3. You are given 2 arrays, one called shoppingList and one called cart.
Example:
Let shoppingList = [‘beer’, ‘milk’, ‘wine’, ‘bananas’, ‘sugar’]
Let cart = [‘milk’, ‘beer’]
Create a new version of shoppingList where the items in the cart have been removed. */


/* Variable */
/* *************************************** */
const shoppingList = ['beer', 'milk', 'wine', 'bananas', 'sugar'];
const cart = ['milk', 'beer'];
// result => ['wine','banandas','sugar']

/* Function */
/* *************************************** */
const filterArray = (arraySource=[item1,item2], arrayExclude=[item2,item3]) => {
    // Duplicate the array and work from the copy.
    const newArray = [...arraySource];

    for (let i = 0; i < arrayExclude.length; i++) {        
        // Get the Index of the item that needs to be removed
        let getIndex = newArray.indexOf(arrayExclude[i]);

        // Remove the item from array using the index #
        newArray.splice(getIndex,1);        
    }

    return newArray;
}

/* Process */
/* *************************************** */
const result = filterArray(shoppingList, cart);

/* Execute */
/* *************************************** */
console.clear();
console.log(`Filter Array`);
console.log(`---------------------------------`);
console.log(`Main Array:`);
console.log(shoppingList,`\n`);
console.log(`Filter Array:`);
console.log(cart,`\n`);
console.log(`Result:`);
console.log(result,`\n`);