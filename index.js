"use strict";

const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const diceel = document.querySelector(".dice");
const rolldice = document.querySelector(".btn--roll");
const player1currentscore = document.getElementById("current--0");
const player2currentscore = document.getElementById("current--1");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

let currentscore = 0;
let activeplayer = 0;
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
    document.getElementById(`current--${activeplayer}`).textContent =
      currentscore;


    //Instead of using the dynamic approach above we can also do this.
    // player1currentscore.textContent = currentscore;
    console.log(player1currentscore.textContent);
  } else {
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    currentscore = 0;
    activeplayer = activeplayer === 0 ? 1 : 0;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");

    //Instead of using toggle we can also do this.

    //  if (activeplayer == 1) {
    //   player1.classList.add("player--active");
    //   player0.classList.remove("player--active");
    // } else {
    //   player0.classList.add("player--active");
    //   player1.classList.remove("player--active");
    // }
  }
});

// Setting the current value
