(() => {
  const app = {
    initialize() {
      this.cacheElements();
      this.buildUI();
    },
    cacheElements() {
      this.$hamburgerMenu = document.getElementById("hamburger_menu");
    },

    buildUI() {
      this.generateHamburgerMenu();
    },

    generateHamburgerMenu() {
      const $item = document.getElementById("hamburger");
      $item.addEventListener("click", (e) => {
        this.$hamburgerMenu.classList.add("open");

        const $btnClose = document.getElementById("btn");
        $btnClose.addEventListener("click", (e) => {
          this.$hamburgerMenu.classList.remove("open");
        });
      });
    },
  };
  app.initialize();
})();
