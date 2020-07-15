(function() {
  const openButton = document.querySelector("#hamburger-menu");
  const navigation = document.querySelector(".navigation");
  const closeElement = document.querySelector(".close");

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
})()