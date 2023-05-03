// Rocket! Yeah! Satellite of Love!
/* Objective: 
-----------------------------------------
1. Start with a heading titled "Countdown in..."
2. Create function that counts down from 10 to 1.
2. After each number add same amount of asterisk (*) as the number.
3. Once the countdown is done say "🚀 We Have Lift Off!"


Result:
-----------------------------------------
Countdown in...
10 * * * * * * * * * *
9 * * * * * * * * *
8 * * * * * * * *
7 * * * * * * *
6 * * * * * *
5 * * * * *
4 * * * *
3 * * *
2 * *
1 *
    🚀 We Have Lift Off!
*/


const setLiftOff = () => {
  console.log(`Countdown in...`);

  for (let i = 10; i >= 0; i --) {

    let countDownText = i + " *".repeat(i);

    if (i === 0) {
      console.log(`    🚀 We Have Lift Off!`);
    } else {
      console.log(countDownText);
    }
  }
}

setLiftOff()