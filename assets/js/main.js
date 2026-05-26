const menuToggle = document.querySelector("#menuToggle");
const siteMenu = document.querySelector("#siteMenu");
const currentYear = document.querySelector("#currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (menuToggle && siteMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = !siteMenu.classList.contains("hidden");

    siteMenu.classList.toggle("hidden", isOpen);
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.innerHTML = isOpen
      ? '<i class="fas fa-bars"></i>'
      : '<i class="fas fa-times"></i>';
  });

  siteMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteMenu.classList.add("hidden");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });
}
