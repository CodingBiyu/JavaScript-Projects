const button = document.querySelector(".login-btn");
button.addEventListener("click", function () {
  // Redirect to the other page
  window.location.href = "/login/login.html";
});

var redicons = document.getElementsByClassName("fa-heart");
var total_like = 0;
var likes = document.querySelector(".likes");

for (var i = 0; i < redicons.length; i++) {
  redicons[i].addEventListener("click", function () {
    console.log(" total likes: ", total_like);

    // calculatng total likes whenever clicked
    total_like = total_like + 1;
    this.style.color = "red";

    // adding total likes to top heart  icon
    likes.innerHTML = total_like;
  });
}

var items = document.getElementsByClassName("cart-btn");
var total = 0;
var total_fruits = document.querySelector(".total_fruits");

for (var j = 0; j < items.length; j++) {
  items[j].addEventListener("click", function () {
    console.log(" total items: ", total);

    // calculatng total items whenever clicked
    total = total + 1;

    // adding total ammount to top shopping cart icon
    total_fruits.innerHTML = total;
  });
}
