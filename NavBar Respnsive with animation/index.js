const cross = document.querySelector(".cross");
const hamburger = document.querySelector(".hamburger");
const sideBar = document.querySelector(".sideBar");

hamburger.addEventListener(
  "click",
  (SideBarOpened = () => {
    sideBar.style.right = 0;
  })
);
cross.addEventListener(
  "click",
  (SideBarClosed = () => {
    sideBar.style.right = "-100%";
  })
);
