// nav Animation
let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});
// circle animation 
        var circle = document.getElementById("circle");
        var upBtn = document.getElementById("upBtn");
        var downBtn = document.getElementById("downBtn");

        var rotateSum;
        let rotateValue = 0;
        upBtn.onclick = function() {
          rotateValue -= 90;
          circle.style.transform = `rotate(${rotateValue}deg)`;
        }
        downBtn.onclick = function() {
          rotateValue += 90;
          circle.style.transform = `rotate(${rotateValue}deg)`;
        }