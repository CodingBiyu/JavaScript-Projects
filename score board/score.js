const scoreLeft = document.querySelector("h1");
const scoreRight = document.querySelector(".scoreright");
const addp1 = document.querySelector(".button1");
const addp2 = document.querySelector(".button2");
const reset = document.querySelector(".reset");
const round = document.querySelector("#dropdown");
const roundval = parseInt(round.value);
let left = 0;
let right = 0;

addp1.addEventListener("click", () => {
  if (roundval == 0) {
    alert("Please Select Rounds first");
  }

  if (left < roundval) {
    left++;
    console.log("left: ", left);
    scoreLeft.innerText = `${left} to`;
    console.log(roundval);
  }
});

addp2.addEventListener("click", () => {
  if (roundval == 0) {
    alert("Please Select Rounds first");
  }

  if (right < roundval) {
    right++;
    console.log("right: ", right);
    scoreRight.innerText = right;
    console.log(parseInt(roundval));
  }
});

reset.addEventListener("click", () => {
  left = 0;
  right = 0;
  roundval = 0;
  scoreLeft.innerText = `0 to`;
  scoreRight.innerText = 0;
});
// console.log(round.value);
// while (round.value != 0) {

if (left == roundval) {
  scoreLeft.style.color = "green";
} else {
  scoreLeft.style.color = "red";
}
if (right == roundval) {
  scoreRight.style.color = "green";
} else {
  scoreRight.style.color = "red";
}
// }
