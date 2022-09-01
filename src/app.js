/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let excuse = document.getElementById("excuse");

  const numRandom = arr => Math.floor(Math.random() * arr.length);
  const randomText = () =>
    `${who[numRandom(who)]} ${what[numRandom(what)]} ${when[numRandom(when)]}`;
  excuse.innerHTML = randomText();
};
