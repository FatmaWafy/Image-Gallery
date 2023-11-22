let ScrollContainer = document.querySelector(".gallery");
let Backbtn = document.getElementById("backbtn");
let Nextbtn = document.getElementById("nextbtn");

ScrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  ScrollContainer.scrollLeft += evt.deltaY;
  ScrollContainer.style.scrollBehavior = "auto";
});

Backbtn.addEventListener("click", () => {
  ScrollContainer.style.scrollBehavior = "smooth";
  ScrollContainer.scrollLeft -= 900;
});

Nextbtn.addEventListener("click", () => {
  ScrollContainer.style.scrollBehavior = "smooth";
  ScrollContainer.scrollLeft += 900;
});
