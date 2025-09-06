export class Burger {
  BURGER_BUTTON = document.getElementById("burger");
  CANCEL_BUTON = document.getElementById("cancel");
  ACTIVE_FIELD = document.getElementById("activeField");
  BODY = document.querySelector("body");
  HEADER_NAV = document.getElementById("headerNav");
  isMenuOpen = false;

  constructor() {
    this.BURGER_BUTTON?.addEventListener("click", (event) => {
      event.stopPropagation();
      this.isMenuOpen = true;
      this.bBH_classesToggle();
      this.changeOverflow(this.BODY, "hidden");
    });

    this.CANCEL_BUTON?.addEventListener("click", (event) => {
      event.stopPropagation();
      this.isMenuOpen = false;
      this.bBH_classesToggle();
      this.changeOverflow(this.BODY, "auto");
    });

    this.BODY?.addEventListener("click", (event) => {
      if ((event.target as HTMLElement).closest("#headerNav")) {
        if (this.isMenuOpen && (event.target as HTMLElement).tagName?.toLowerCase() === "a") {
          this.isMenuOpen = false;
          this.bBH_classesToggle();
          this.changeOverflow(this.BODY, "auto");
        }
        return;
      }

      if (this.isMenuOpen) {
        this.isMenuOpen = false;
        this.bBH_classesToggle();
        this.changeOverflow(this.BODY, "auto");
      }
    });
  }

  bBH_classesToggle(): void {
    this.ACTIVE_FIELD?.classList.toggle("inactive_field");
    this.BURGER_BUTTON?.classList.toggle("inactive_button");
    this.HEADER_NAV?.classList.toggle("appear");
  }

  changeOverflow(element: HTMLElement | null, overflowStyle: string): void {
    if (element) {
      element.style.overflow = overflowStyle;
    }
  }
}
