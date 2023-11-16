// let joke = "";
// let h2 = document.querySelector('h2')

// function displayJoke() {
//     h2.innerText = joke;
// }

// fetch("https://icanhazdadjoke.com/" , {
//     method: "GET",
//     headers: {
//         Accept: "application/json",
//     },
// })
// .then((res) => {
//     res.json().then((data) => {
//          console.log(data.joke);
//        joke = data.joke;
//        displayJoke()
//     })
// })
// .then(() => {})
// .catch((err) => {});

// let button =  document.querySelector('button')
// button.addEventListener('click', ()=>{
//     displayJoke()
// })

let joke = "";
let h2 = document.querySelector("h2");
let button = document.querySelector("button");

button.addEventListener("click", () => {
  displayJoke();
});

function displayJoke() {
  fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    // res is the response
    .then((res) => {
      res.json().then((data) => {
        // res.json parse the body as json object(js object notation )
        console.log(data.joke);
        h2.innerText = data.joke;
      });
    })
    .catch((err) => {
      alert("We will be right back soon");
    });
}
