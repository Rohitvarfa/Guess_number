// let randomNumber = parseInt(Math.random()*100 + 1);

// const submit = document.querySelector('#sbmt');
// const userInput = document.querySelector('#guessFeild');
// const guessSlot = document.querySelector('.guesses');
// const remaining = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');
// const startOver = document.querySelector('.resultParas');


// const p = document.createElement('p')

// let prevGuess = []
// let numGuess = 1

// let playGame = true;

// if(playGame){
//     submit.addEventListener('click',function(e){
//      e.preventDefault()
//      const guess = parseInt(userInput.value)
//      validateGuess(guess);
//     })
// }

// // sara validate se related kaam karenge.
// function validateGuess(guess){
//     if(isNaN(guess)){
//         alert('please enter a valid number');
//     } else if(guess<1){
//         alert('please enter a number more than 1');
//     }else if(guess>100){
//         alert('please enter a number less than 100');
//     }else{
//         prevGuess.push(guess);
//         if(numGuess>10){
//             displayGuess(guess);
//             displayMessage(`Game Over. Random number was ${randomNumber}`);
//             endGame();
//         }else{
//             displayGuess(guess);
//             checkGuess(guess);
//         }
//     }
// }

// // validate ke bad check karenge. ki kya hai.
// function checkGuess(guess){
//     if(guess=== randomNumber){
//         displayMessage(`You guessed it right`);
//         endGame();
//     }else if(guess<randomNumber){
//        displayMessage(`Number is low`);
//     }
//     else if(guess>randomNumber){
//         displayMessage(`Number is high`);
//      }
// }

// //isme sbse phle to hum user ki value ko empty string se update kr denge
// //ab hum guess slot ke under innerHtml insert krwana hai

// function displayGuess(guess){
//     //
//     userInput.value = '';
//     guessSlot.innerHTML += `${guess} `
//     numGuess++;
//     remaining.innerHTML = `${11-numGuess}`

// }

// // ye dom ke sath interect karega,user ki value ko empty krna ,innerHtml change krna
// function displayMessage(message){
// //
// lowOrHi.innerHTML = `<h2>${message}</h2>`;
// }



// //
// function endGame(){
//   userInput.value = ''
//   userInput.setAttribute('disabled' ,'');
//   p.classList.add('button')
//   p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
//   startOver.appendChild(p);
//   playGame = false;
//   newGame();
// }
// //
// function newGame(){
// const newGameButton = document.querySelector('#newGame');
// newGameButton.addEventListener('click',function(e){
// randomNumber = parseInt(Math.random() *100 +1);
// prevGuess = []
// numGuess = 1
// guessSlot.innerHTML= ''
// remaining.innerHTML = `${11-numGuess}`;
// userInput.removeAttribute('disabled');
// startOver.removeChild(p);
// playGame = true;
// })
// }

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}


function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}



function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}



