// These define our variables.

const number = 15
let guess = 0

//makes event occur when button is clicked

document.getElementById('button').addEventListener('click', play)

//creates a function called play that will state the action that will occur when the button is clicked

function play () {
  // The "while" is for making a loop. This makes it so the user has to keep guessing untill they guess the right number.
  while (guess !== number) {
    guess = prompt('Guess my age')
    guess = parseInt(guess)

  // These are for telling the user if they need to guess higher or lower.

    if (guess > number) {
    alert('Guess is too high, try again.')
    } else if (guess < number) {
    alert('Guess is too low, try again.')
    } else if (guess === number) {
    alert('You got it right.Yay you win !')
    }
  }
}
