/* Create a number guessing game to generate a number between the range of 1 and 2. The game should prompt users for their username.
Set range as function parameter and prompt the player to predict the generated number between the given range. At a correct guess, the game should award the player a point and move them to stage 2 by increasing the range limit value by 1, e.g. range is from 1 and 3 for stage 2 and so on. Connect replit account to GitHub and save your program on GitHub. Ensure that your replit link is written in your GitHub repo readme file. Submit GitHub link to the saved project. */
let stage = 1, userName;
userName = prompt('What is your user name: ');


alert(`Hello! Welcome ${userName}! Enter a number to Start Game from Stage ${stage}!`);

let num = 2; x = 0;
function random() {
  let randNum = Math.ceil(Math.random() * num);
  return randNum;
}

guess();

function guess() {
  let userGuess = +prompt(`Guess a number between the range 1 and ${num}: `);
  if (random() === userGuess) {
    stage++;
    alert(`Your guess is correct! Continue to move to stage ${stage}!`);
    x++;
    alert(`You have ${x} ${x === 1 ? 'point' : 'points'}`);
    num++;
    random();
    guess();
  } else {
    alert('Your guess is wrong! Try again!')
    random();
    guess();
  }
}






// let userName = prompt('Enter your user name: ')
// console.log(`Your name is ${userName}`)

// let randNum, numGuess, userGuess, range, points = 0;


// random()

// userGuess = +prompt('Guess a number: ')

//     if (userGuess === randNum) {
//       console.log(`Your guess is correct. You earned a point. You have moved on to stage ${range}`)
//       console.log(`You have ${points+=1}points`)
//       userGuess = +prompt('Guess a number: ')
//       random()
//     } else {
//         console.log('You guessed wrong, try again')
//     }



// function random() {
//   range = 2; 

//   do {  
//     randNum = Math.ceil(Math.random()  * range)

//     return randNum

//   } while (numLength++)

// }

alert('testing');