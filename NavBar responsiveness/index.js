const opened = document.querySelector(".opened");
const closed = document.querySelector(".closed");

opened.addEventListener(
  "click",
  (showSideBar = () => {
    const sidebar = document.querySelector(".sidebar");

    // sidebar.style.display = "flex";
    sidebar.style.right = 0;
  })
);

closed.addEventListener(
  "click",
  (showSideBar = () => {
    const sidebar = document.querySelector(".sidebar");

    // sidebar.style.display = "none";
    sidebar.style.right = "-100%";
  })
);
