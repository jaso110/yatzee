const dice_one = [1, 2, 3, 4, 5, 6];
const dice_two = [1, 2, 3, 4, 5, 6];
const dice_three = [1, 2, 3, 4, 5, 6];
const dice_four = [1, 2, 3, 4, 5, 6];
const dice_five = [1, 2, 3, 4, 5, 6];

var points = 0;

document.querySelector('#player1-name').addEventListener("click", playerOne);

document.querySelector('#roll-dices').addEventListener("click", function() {
  rollDiceOne();
  rollDiceTwo();
  rollDiceThree();
  rollDiceFour();
  rollDiceFive();
});

function playerOne() {
  var playerOneName = prompt("Player 1 name...")

  document.querySelector('#player1-name').textContent = playerOneName;
}

function rollDiceOne() {
  for (let i = dice_one.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let k = dice_one[i];
    dice_one[i] = dice_one[j];
    dice_one[j] = k;
  }

  let dice_number1 = dice_one[0];

  console.log(dice_number1);

  document.querySelector(".img1").setAttribute("src", "images/dice" + dice_number1 + ".png");

  points += dice_number1;
}

function rollDiceTwo() {
  for (let i = dice_two.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let k = dice_two[i];
    dice_two[i] = dice_two[j];
    dice_two[j] = k;
  }

  let dice_number2 = dice_two[0];

  console.log(dice_number2);

  document.querySelector(".img2").setAttribute("src", "images/dice" + dice_number2 + ".png");

  points += dice_number2;
}

function rollDiceThree() {
  for (let i = dice_three.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let k = dice_three[i];
    dice_three[i] = dice_three[j];
    dice_three[j] = k;
  }

  let dice_number3 = dice_three[0];

  console.log(dice_number3);

  document.querySelector(".img3").setAttribute("src", "images/dice" + dice_number3 + ".png");

  points += dice_number3;
}

function rollDiceFour() {
  for (let i = dice_four.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let k = dice_four[i];
    dice_four[i] = dice_four[j];
    dice_four[j] = k;
  }

  let dice_number4 = dice_four[0];

  console.log(dice_number4);

  document.querySelector(".img4").setAttribute("src", "images/dice" + dice_number4 + ".png");

  points += dice_number4;
}

function rollDiceFive() {
  for (let i = dice_five.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let k = dice_five[i];
    dice_five[i] = dice_five[j];
    dice_five[j] = k;
  }

  let dice_number5 = dice_five[0];

  console.log(dice_number5);

  document.querySelector(".img5").setAttribute("src", "images/dice" + dice_number5 + ".png");

  points += dice_number5;
  document.querySelector("#points-1").textContent = points + " points";
  console.log(points);
}
