export class Burger {
  BURGER_BUTTON = document.getElementById("burger");
  CANCEL_BUTON = document.getElementById("cancel");
  BODY = document.querySelector("body");
  HEADER_NAV = document.getElementById("headerNav");
  isMenuOpen = false;

  constructor() {
    this.BURGER_BUTTON?.addEventListener("click", (event) => {
      event.stopPropagation();
      this.isMenuOpen = true;
      this.bBH_classesToggle();
    });

    this.CANCEL_BUTON?.addEventListener("click", (event) => {
      event.stopPropagation();
      this.isMenuOpen = false;
      this.bBH_classesToggle();
    });

    this.BODY?.addEventListener("click", (event) => {
      if ((event.target as HTMLElement).closest("#headerNav")) {
        return;
      }

      if (this.isMenuOpen) {
        this.isMenuOpen = false;
        this.bBH_classesToggle();
      }
    });
  }

  bBH_classesToggle(): void {
    this.BODY?.classList.toggle("inactive_field");
    this.BURGER_BUTTON?.classList.toggle("inactive_button");
    this.HEADER_NAV?.classList.toggle("appear");
  }
}
