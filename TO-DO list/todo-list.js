const form = document.querySelector("form");
const ul = document.querySelector("#list");
const input = document.querySelector("input");

form.addEventListener("submit", (e) => {
  //handler
  e.preventDefault();
  //   console.log("SUBMITTED!!!");
  const val = input.value;
  //   console.log(val);

  const list1 = document.createElement("li");
  list1.innerText = val;
  ul.append(list1);
  input.value = "";
});
