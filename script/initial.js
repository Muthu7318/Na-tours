document.addEventListener("click", (e) => {
  if (e.target.className == "navigation__link") {
    document.getElementsByClassName("navigation__label")[0].click();
  }
});
