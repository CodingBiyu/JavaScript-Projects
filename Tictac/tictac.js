const div1 = document.querySelector("#one");
const div2 = document.querySelector("#two");
const div3 = document.querySelector("#three");
const div4 = document.querySelector("#four");
const div5 = document.querySelector("#five");
const div6 = document.querySelector("#six");
const div7 = document.querySelector("#seven");
const div8 = document.querySelector("#eight");
const div9 = document.querySelector("#nine");
const h2 = document.querySelector("h2");

let matchWonX = 0;
let matchWonO = 0;

let turn = 0;
const checkP = (divtag) => {
  const pAlready = divtag.querySelectorAll("p");

  const length = pAlready.length;
  return length;
};
const createP = () => {
  const p = document.createElement("p");

  if (turn % 2 == 0) {
    turn++;
    console.log("turn", turn);
    p.innerText = "X";
    return p;
  } else {
    turn++;
    console.log("turn", turn);
    p.innerText = "O";
    return p;
  }
};
div1.addEventListener("click", (e) => {
  if (checkP(div1) >= 1) {
    return;
  }
  div1.append(createP());
  winner(div1);
});

div2.addEventListener("click", () => {
  if (checkP(div2) >= 1) {
    return;
  }
  div2.append(createP());

  winner(div2);
});
div3.addEventListener("click", () => {
  if (checkP(div3) >= 1) {
    return;
  }
  div3.append(createP());
  winner(div3);
});
div4.addEventListener("click", () => {
  if (checkP(div4) >= 1) {
    return;
  }
  div4.append(createP());
  winner(div4);
});

div5.addEventListener("click", () => {
  if (checkP(div5) >= 1) {
    return;
  }
  div5.append(createP());
  winner(div5);
});

div6.addEventListener("click", () => {
  if (checkP(div6) >= 1) {
    return;
  }
  div6.append(createP());
  winner(div6);
});

div7.addEventListener("click", () => {
  if (checkP(div7) >= 1) {
    return;
  }
  div7.append(createP());
  winner(div7);
});
div8.addEventListener("click", () => {
  if (checkP(div8) >= 1) {
    return;
  }
  div8.append(createP());
  winner(div8);
});
div9.addEventListener("click", () => {
  if (checkP(div9) >= 1) {
    return;
  }
  div9.append(createP());
  winner(div9);
});

//<<------------------------  LOGIC COLUMN  ---------------------------->>

const h4 = document.querySelector(".XWon");
const winner = (divtag) => {
  const val1 = div1.innerText;
  const val2 = div2.innerText;
  const val3 = div3.innerText;
  const val4 = div4.innerText;
  const val5 = div5.innerText;
  const val6 = div6.innerText;
  const val7 = div7.innerText;
  const val8 = div8.innerText;
  const val9 = div9.innerText;
  if (h2.innerText.length < 5) {
    if (val1 == "X" && val2 == "X" && val3 == "X") {
      console.log("you won");
      h2.innerText = "X WON!!!";
      matchWonX++;
      return;
    }
    if (val4 == "X" && val5 == "X" && val6 == "X") {
      console.log("you won");
      h2.innerText = "X WON!!!";
      matchWonX++;
      return;
    }
    if (val7 == "X" && val8 == "X" && val9 == "X") {
      console.log("you won");
      h2.innerText = "X WON!!!";
      matchWonX++;
      return;
    }
    if (val1 == "X" && val5 == "X" && val9 == "X") {
      console.log("you won");
      h2.innerText = "X WON!!!";
      matchWonX++;
      return;
    }
    if (val3 == "X" && val5 == "X" && val7 == "X") {
      console.log("you won");
      h2.innerText = "X WON!!!";
      matchWonX++;
      return;
    }
    if (val2 == "X" && val5 == "X" && val8 == "X") {
      console.log("you won");
      h2.innerText = "X WON!!!";
      matchWonX++;
      return;
    }
    if (val3 == "X" && val6 == "X" && val9 == "X") {
      console.log("you won");
      h2.innerText = "X WON!!!";
      matchWonX++;
      return;
    }
    if (val1 == "X" && val4 == "X" && val7 == "X") {
      console.log("you won");
      h2.innerText = "X WON!!!";
      matchWonX++;
      return;
    }
    if (val1 == "O" && val2 == "O" && val3 == "O") {
      console.log("you won");
      h2.innerText = "O WON!!!";
      matchWonO++;
      return;
    }
    if (val4 == "O" && val5 == "O" && val6 == "O") {
      console.log("you won");
      h2.innerText = "O WON!!!";
      matchWonO++;

      return;
    }
    if (val7 == "O" && val8 == "O" && val9 == "O") {
      console.log("you won");
      h2.innerText = "O WON!!!";
      matchWonO++;

      return;
    }
    if (val1 == "O" && val5 == "O" && val9 == "O") {
      console.log("you won");
      h2.innerText = "O WON!!!";
      matchWonO++;

      return;
    }
    if (val3 == "O" && val5 == "O" && val7 == "O") {
      console.log("you won");
      h2.innerText = "O WON!!!";
      matchWonO++;

      return;
    }
    if (val1 == "O" && val4 == "O" && val7 == "O") {
      console.log("you won");
      h2.innerText = "O WON!!!";
      matchWonO++;
      return;
    }
    if (val2 == "O" && val5 == "O" && val8 == "O") {
      console.log("you won");
      h2.innerText = "O WON!!!";
      matchWonO++;
      return;
    }
    if (val3 == "O" && val6 == "O" && val9 == "O") {
      console.log("you won");
      h2.innerText = "O WON!!!";
      matchWonO++;
      return;
    }
    if (turn == 9 && h2.innerText == "") {
      console.log("DRAW");
      h2.innerText = "DRAW :(";
    }
  }
  console.log(h4);
  if (h2.innerText == "X WON!!!" || h2.innerText.length == 8) {
    console.log("match won X", matchWonX);
    h4.innerText = `Won :${matchWonX}`;
  }
  if (h2.innerText == "O WON!!!" || h2.innerText.length > 4) {
    const h4 = document.querySelector(".OWon");
    console.log("match won O", matchWonO);
    h4.innerText = `Won :${matchWonO}`;
  }
};

const button = document.querySelector("button");
button.addEventListener("click", (e) => {
  console.log(matchWonX);
  console.log(matchWonO);
  console.log(turn);
  console.log(length);
  console.log(h2.innerText);
  console.log(h4.innerText);
  //   console.log(p);

  //   div1.removeChild(p);
  matchWonX = 0;
  matchWonO = 0;
  turn = 0;
  length = 0;
  h2.innerText = "";
  h4.innerText = "Won : 0";
  console.log(matchWonX);
  console.log(matchWonO);
  console.log(turn);
  console.log(length);
  console.log(h2.innerText);
  console.log(h4.innerText);

  //   const kid = document.querySelectorAll(".children");
});
