// Cogito, Ergo Sum
/* -----------------------------------------
isStackOverflowError: an error that occurs when a function calls itself 
recursively too many times, causing the call stack to exceed its maximum size.....
*/

function whatIs (theMeaningOfLife) {
  console.log (theMeaningOfLife);
  whatIs();
}

whatIs("I think therefore I am.");