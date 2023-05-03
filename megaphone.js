// MEGAPHONE
/* Objective: 
-----------------------------------------
1. Create a function that coverts YELLS any string that is passed.
2. Add a speaker emoji in front of the final result, but the argument can only be a string -- no emoji can be passed.


Sample:
-----------------------------------------
generateSound("hey there!");


Result:
-----------------------------------------
🔊 HEY THERE!
*/


function generateSound (text) {
  const result = '🔊 ' + text.toUpperCase();
  return result;
}

function generateSound2 (text) {
  return ('🔊 ' + text.toUpperCase());
}
