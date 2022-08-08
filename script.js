const dice_player_one = [1, 2, 3, 4, 5, 6];
const dice_player_two = [1, 2, 3, 4, 5, 6];
const dice_player_three = [1, 2, 3, 4, 5, 6];

document.querySelector('#player1-name').addEventListener("click", playerOne);
document.querySelector('#player2-name').addEventListener("click", playerTwo);

document.querySelector('#roll-dices').addEventListener("click", function() {
  rollDiceOne();
  rollDiceTwo();
  rollDiceThree();
});

function playerOne() {
  var playerOneName = prompt("Player 1 name...")

  document.querySelector('#player1-name').textContent = playerOneName;
}

function playerTwo() {
  var playerTwoName = prompt("Player 2 name...")

  document.querySelector('#player2-name').textContent = playerTwoName;
}

function rollDiceOne() {
  for (let i = dice_player_one.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let k = dice_player_one[i];
    dice_player_one[i] = dice_player_one[j];
    dice_player_one[j] = k;
  }

  let dice_number1 = dice_player_one[0];

  console.log(dice_number1);

  document.querySelector(".img1").setAttribute("src", "images/dice" + dice_number1 + ".png");
}

function rollDiceTwo() {
  for (let i = dice_player_two.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let k = dice_player_two[i];
    dice_player_two[i] = dice_player_two[j];
    dice_player_two[j] = k;
  }

  let dice_number2 = dice_player_two[0];

  console.log(dice_number2);

  document.querySelector(".img2").setAttribute("src", "images/dice" + dice_number2 + ".png");
}

function rollDiceThree() {
  for (let i = dice_player_three.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let k = dice_player_three[i];
    dice_player_three[i] = dice_player_three[j];
    dice_player_three[j] = k;
  }

  let dice_number3 = dice_player_three[0];

  console.log(dice_number3);

  document.querySelector(".img3").setAttribute("src", "images/dice" + dice_number3 + ".png");
}
