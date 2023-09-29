var randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);
var numberOfInputs = 5;

function guess() {
  numberOfInputs -= 1;
  var input = document.getElementById("answer").value; //the value from the user
  var feedback = document.getElementById("feedback2");
  if (parseInt(input) === randomNumber) {
    feedback.innerHTML =
      "Congratulations! You guessed the number! You can click ' reset ' cu play again.";
  } else if (parseInt(input) > randomNumber) {
    feedback.innerHTML=
      "Your guess is bigger than the number. You have  " +
      numberOfInputs +
      " guesses left.";
  } else  {
    feedback.innerHTML =
      "Your guess is smaller than the number. You have  " +
      numberOfInputs +
      " chances left.";
  }

  if (numberOfInputs === 0) {
    feedback.innerHTML =
      "You did not guess the number. The number was " +
      randomNumber +
      " . Thank you for playing!";
  }
}

document.querySelector('.submit').addEventListener('click',guess);

function reset() {
  location = location;
}
document.querySelector('.reset').addEventListener('click',reset);

