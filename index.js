"use strict";

const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const diceel = document.querySelector(".dice");
const rolldice = document.querySelector(".btn--roll");
const player1currentscore = document.getElementById("current--0");

let currentscore = 0;

score0.textContent = 0;
score1.textContent = 0;

//Rolling the dice on the basis of random numbers

rolldice.addEventListener("click", function () {
  const dicenumber = Math.trunc(Math.random() * 6) + 1;
  console.log(dicenumber);

  diceel.classList.remove("hidden");
  diceel.src = `dice${dicenumber}.png`;

  if (dicenumber != 1) {
    currentscore += dicenumber;
    player1currentscore.textContent = currentscore;
    console.log(player1currentscore.textContent);
  } else {
  }
});

// Setting the current value
