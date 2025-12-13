document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const dropBtn = document.getElementById("dropMobileBtn");
  const dropMenu = document.getElementById("dropMobile");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  if (dropBtn && dropMenu) {
    dropBtn.addEventListener("click", () => {
      dropMenu.classList.toggle("hidden");
    });
  }
});
