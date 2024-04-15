let mobile_nav = document.querySelector(".primary-navigation");
let toggle_nav = document.querySelector(".mobile-nav-toggle");
let clicked = false;

toggle_nav.addEventListener("click", function () {
  if (clicked) {
    toggle_nav.classList.toggle("icon-change");
    mobile_nav.classList.toggle("slide");
    clicked = false;
  } else {
    toggle_nav.classList.toggle("icon-change");
    mobile_nav.classList.toggle("slide");

    clicked = true;
  }
});

document.body.addEventListener("click", function (event) {
  if (
    clicked &&
    !mobile_nav.contains(event.target) &&
    !toggle_nav.contains(event.target)
  ) {
    toggle_nav.classList.toggle("icon-change");
    mobile_nav.classList.toggle("slide");
    clicked = false;
  }
});
