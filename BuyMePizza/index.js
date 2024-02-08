let button1 = document.querySelector(".button1");
let buttons = document.querySelector(".buttons");

let button2 = document.querySelector(".button2");
let h2 = document.querySelector("h2");
let image = document.querySelector("img");
let count = 0;
let count1 = 0;
let x = 25;
button1.addEventListener("click", function () {
  count++;
  console.log(count);

  if (count == 1) {
    h2.innerText = "Please?";
    console.log("count 1: ", count);
  } else if (count == 2) {
    console.log("count 2: ", count);
    h2.innerText = "Please????";
    image.src = "pictures/8.gif";
    // image.style.width = "28%";
  } else if (count == 3) {
    console.log("count 3: ", count);
    h2.innerText = "Please?????????????";
  } else if (count == 4) {
    console.log("count 3: ", count);
    h2.innerText = "I said Please!!!";
    image.src = "pictures/11.gif";
    image.style.width = "30%";

    image.style.paddingRight = 0;
  } else if (count > 4) {
    button1.style.position = "absolute";

    console.log("count 5");

    button1.addEventListener("mouseover", () => {
      const randomX = Math.random() * (window.innerWidth - button1.offsetWidth);
      const randomY =
        Math.random() * (window.innerHeight - button1.offsetHeight);
      console.log(randomX, randomY);

      button1.style.transition = "0.3s ease-in";
      button1.style.left = randomX + "px";
      button1.style.top = randomY + "px";
    });
    button1.addEventListener("click", () => {
      const randomX = Math.random() * (window.innerWidth - button1.offsetWidth);
      const randomY =
        Math.random() * (window.innerHeight - button1.offsetHeight);
      console.log(randomX, randomY);
      button1.style.transition = "0.3s ease-in";

      button1.style.left = randomX + "px";
      button1.style.top = randomY + "px";
    });
  }
});

button2.addEventListener("click", function () {
  count1++;
  console.log(count);

  if (count1 == 1) {
    image.src = "pictures/6.gif";
    h2.innerText = "Yey!!!!!!!";

    // image.style.paddingRight = "120px";
    button1.remove();
  }
  if (count1 == 2) {
    image.src = "pictures/13.gif";
    image.style.paddingRight = 0;

    image.style.width = "40%";
    h2.innerText = "Lalala!!!";
    console.log(buttons);
    buttons.remove();
  }
});
