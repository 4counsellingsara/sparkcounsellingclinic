/* SPARK COUNSELLING CLINIC */
/* Mobile Navigation */

document.addEventListener("DOMContentLoaded", () => {

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav-links");

  if (!menuButton || !navigation) return;

  const menuIcon = menuButton.querySelector("span");

  // Close mobile menu
  function closeMenu() {
    navigation.classList.remove("active");

    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute(
      "aria-label",
      "Open navigation menu"
    );

    if (menuIcon) {
      menuIcon.textContent = "☰";
    }
  }

  // Toggle mobile menu
  menuButton.addEventListener("click", () => {

    const isOpen = navigation.classList.toggle("active");

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuButton.setAttribute(
      "aria-label",
      isOpen
        ? "Close navigation menu"
        : "Open navigation menu"
    );

    if (menuIcon) {
      menuIcon.textContent = isOpen ? "×" : "☰";
    }
  });

  // Close menu after selecting a link
  navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // Close menu with Escape
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  // Close menu when clicking outside it
  document.addEventListener("click", event => {
    if (
      !navigation.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      closeMenu();
    }
  });

  // Reset navigation on desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 950) {
      closeMenu();
    }
  });

});
