/* =========================================
   SPARK COUNSELLING CLINIC
   MOBILE NAVIGATION
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav-links");

  if (!menuButton || !navigation) return;

  const menuIcon = menuButton.querySelector("span");

  // Close the mobile menu
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

  // Open or close menu
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

  // Close menu when a navigation link is selected
  navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // Close menu with Escape key
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  // Close menu when clicking outside
  document.addEventListener("click", event => {
    if (
      !navigation.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      closeMenu();
    }
  });

  // Reset navigation when switching to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 950) {
      closeMenu();
    }
  });

});
