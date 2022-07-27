const $boardSpot0 = document.querySelector(".spot00");
const $boardSpot1 = document.querySelector(".spot01");
const $boardSpot2 = document.querySelector(".spot02");
const $boardSpot3 = document.querySelector(".spot03");
const $boardSpot4 = document.querySelector(".spot04");
const $boardSpot5 = document.querySelector(".spot05");
const $boardSpot6 = document.querySelector(".spot06");
const $boardSpot7 = document.querySelector(".spot07");
const $boardSpot8 = document.querySelector(".spot08");

let currentMove = "X";

function toggleMove() {
  if (currentMove == "X") {
    currentMove = "O";
  } else {
    currentMove = "X";
  }
}

function verifyWinner() {
  if (
    $boardSpot0.innerHTML != "" &&
    $boardSpot0.innerHTML == $boardSpot1.innerHTML &&
    $boardSpot1.innerHTML == $boardSpot2.innerHTML
  ) {
    return currentMove;
  }
  if (
    $boardSpot3.innerHTML != "" &&
    $boardSpot3.innerHTML == $boardSpot4.innerHTML &&
    $boardSpot4.innerHTML == $boardSpot5.innerHTML
  ) {
    return currentMove;
  }
  if (
    $boardSpot6.innerHTML != "" &&
    $boardSpot6.innerHTML == $boardSpot7.innerHTML &&
    $boardSpot7.innerHTML == $boardSpot8.innerHTML
  ) {
    return currentMove;
  }
  if (
    $boardSpot0.innerHTML != "" &&
    $boardSpot0.innerHTML == $boardSpot3.innerHTML &&
    $boardSpot3.innerHTML == $boardSpot6.innerHTML
  ) {
    return currentMove;
  }
  if (
    $boardSpot1.innerHTML != "" &&
    $boardSpot1.innerHTML == $boardSpot4.innerHTML &&
    $boardSpot4.innerHTML == $boardSpot7.innerHTML
  ) {
    return currentMove;
  }
  if (
    $boardSpot2.innerHTML != "" &&
    $boardSpot2.innerHTML == $boardSpot5.innerHTML &&
    $boardSpot5.innerHTML == $boardSpot8.innerHTML
  ) {
    return currentMove;
  }
  if (
    $boardSpot0.innerHTML != "" &&
    $boardSpot0.innerHTML == $boardSpot4.innerHTML &&
    $boardSpot4.innerHTML == $boardSpot8.innerHTML
  ) {
    return currentMove;
  }
  if (
    $boardSpot2.innerHTML != "" &&
    $boardSpot2.innerHTML == $boardSpot4.innerHTML &&
    $boardSpot4.innerHTML == $boardSpot6.innerHTML
  ) {
    return currentMove;
  }
}

$boardSpot0.addEventListener("click", function () {
  if ($boardSpot0.innerHTML != "") return;
  $boardSpot0.innerHTML = currentMove;
  const gameResult = verifyWinner();
  if(gameResult == 'X' || gameResult == 'O') {
    alert(currentMove + 'venceu!')
  }
  toggleMove();
});

$boardSpot1.addEventListener("click", function () {
  if ($boardSpot1.innerHTML != "") return;
  $boardSpot1.innerHTML = currentMove;
  const gameResult = verifyWinner();
  if(gameResult == 'X' || gameResult == 'O') {
    alert(currentMove + ' venceu!')
  }
  toggleMove();
});

$boardSpot2.addEventListener("click", function () {
  if ($boardSpot2.innerHTML != "") return;
  $boardSpot2.innerHTML = currentMove;
  const gameResult = verifyWinner();
  if(gameResult == 'X' || gameResult == 'O') {
    alert(currentMove + ' venceu!')
  }
  toggleMove();
});

$boardSpot3.addEventListener("click", function () {
  if ($boardSpot3.innerHTML != "") return;
  $boardSpot3.innerHTML = currentMove;
  const gameResult = verifyWinner();
  if(gameResult == 'X' || gameResult == 'O') {
    alert(currentMove + ' venceu!')
  }
  toggleMove();
});

$boardSpot4.addEventListener("click", function () {
  if ($boardSpot4.innerHTML != "") return;
  $boardSpot4.innerHTML = currentMove;
  const gameResult = verifyWinner();
  if(gameResult == 'X' || gameResult == 'O') {
    alert(currentMove + ' venceu!')
  }
  toggleMove();
});

$boardSpot5.addEventListener("click", function () {
  if ($boardSpot5.innerHTML != "") return;
  $boardSpot5.innerHTML = currentMove;
  const gameResult = verifyWinner();
  if(gameResult == 'X' || gameResult == 'O') {
    alert(currentMove + ' venceu!')
  }
  toggleMove();
});

$boardSpot6.addEventListener("click", function () {
  if ($boardSpot6.innerHTML != "") return;
  $boardSpot6.innerHTML = currentMove;
  const gameResult = verifyWinner();
  if(gameResult == 'X' || gameResult == 'O') {
    alert(currentMove + ' venceu!')
  }
  toggleMove();
});

$boardSpot7.addEventListener("click", function () {
  if ($boardSpot7.innerHTML != "") return;
  $boardSpot7.innerHTML = currentMove;
  const gameResult = verifyWinner();
  if(gameResult == 'X' || gameResult == 'O') {
    alert(currentMove + ' venceu!')
  }
  toggleMove();
});

$boardSpot8.addEventListener("click", function () {
  if ($boardSpot8.innerHTML != "") return;
  $boardSpot8.innerHTML = currentMove;
  const gameResult = verifyWinner();
  if(gameResult == 'X' || gameResult == 'O') {
    alert(currentMove + ' venceu!')
  }
  toggleMove();
});
