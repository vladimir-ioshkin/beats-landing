const openButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const closeElement = document.querySelector(".navigation__close")

openButton.addEventListener("click", (e) => {
  e.preventDefault();

  navigation.classList.add("navigation_fullscreen");
})

closeElement.addEventListener("click", (e) => {
  e.preventDefault();

  navigation.classList.remove("navigation_fullscreen");
})

navigation.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target == navigation) {
    navigation.classList.remove("navigation_fullscreen");
  }
})
