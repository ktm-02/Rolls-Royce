document.addEventListener("DOMContentLoaded", () => {
  const arrowBtn = document.getElementById("arrow-btn");
  arrowBtn.addEventListener("mouseover", () => {
    arrow.style.display = "inline";
  });
  arrowBtn.addEventListener("mouseleave", () => {
    arrow.style.display = "none";
  });
  const arrowBtn1 = document.getElementById("arrow-btn1");
  arrowBtn1.addEventListener("mouseover", () => {
    arrow1.style.display = "inline";
  });
  arrowBtn1.addEventListener("mouseleave", () => {
    arrow1.style.display = "none";
  });
  const arrowBtn2 = document.getElementById("arrow-btn2");
  arrowBtn2.addEventListener("mouseover", () => {
    arrow2.style.display = "inline";
  });
  arrowBtn2.addEventListener("mouseleave", () => {
    arrow2.style.display = "none";
  });
  arrowBtn.addEventListener("click", () => {
    const content = document.getElementById("content");
    const menubar = document.getElementById("menu-bar");
    content.style.display = "none";
    menubar.style.display = "block";
  });
  arrowBtn1.addEventListener("click", () => {
    const content = document.getElementById("content");
    const menubar = document.getElementById("menu-bar");
    content.style.display = "none";
    menubar.style.display = "block";
  });
  arrowBtn2.addEventListener("click", () => {
    const content = document.getElementById("content");
    const menubar = document.getElementById("menu-bar");
    content.style.display = "none";
    menubar.style.display = "block";
  });
  const menu = document.getElementById("menu");
  const menuview = document.getElementById("menu-view");
  menu.addEventListener("click", () => {
    menuview.style.display = "block";
    menu.style.display = "none";
  });
  const menuclose = document.getElementById("menu-close");
  menuclose.addEventListener("click", () => {
    menuview.style.display = "none";
    menu.style.display = "inline";
  });
});
