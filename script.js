const hamburgerIcon = document.querySelector(".hamburger-icon");
const barOne = document.querySelector(".bar-1");
const barTwo = document.querySelector(".bar-2");
const barThree = document.querySelector(".bar-3");

let btnOpenClose = 0;
hamburgerIcon.addEventListener("click", function () {
  if (btnOpenClose === 0) {
    barOne.style.transform = "rotate(45deg) translateX(5.5px) translateY(5.5px)";
    barTwo.style.opacity = "0";
    barThree.style.transform = "rotate(-45deg) translateX(5.5px) translateY(-5.5px)";
    btnOpenClose = 1;
  } else if (btnOpenClose === 1) {
    barOne.style.transform = "rotate(0) translateX(0) translateY(0)";
    barTwo.style.opacity = "1";
    barThree.style.transform = "rotate(0) translateX(0) translateY(0)";
    btnOpenClose = 0;
  }
});
