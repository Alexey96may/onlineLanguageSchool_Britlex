import * as flsFunctions from "./modules/functions.js";

function my_test(x: number): boolean {
    let answer = x > 2 ? true : false;
    return answer;
}

my_test(24);

flsFunctions.isWebp();

let burger = document.getElementById("burger");
const cancelBurger = document.getElementById("cancel");
const body = document.querySelector("body");

let isMenuOpen = false;

const headerNav = document.getElementById("headerNav");

burger?.addEventListener("click", (event) => {
    event.stopPropagation();
    isMenuOpen = true;

    burger?.classList.toggle("inactive_button");
    body?.classList.toggle("inactive_field");
    headerNav?.classList.toggle("appear");
});

cancelBurger?.addEventListener("click", (event) => {
    event.stopPropagation();
    isMenuOpen = false;
    body?.classList.toggle("inactive_field");
    burger?.classList.toggle("inactive_button");
    headerNav?.classList.toggle("appear");
});

body?.addEventListener("click", (event) => {
    if ((event.target as HTMLElement).closest("#headerNav")) {
        return;
    }
    if (isMenuOpen) {
        isMenuOpen = false;
        body?.classList.toggle("inactive_field");
        burger?.classList.toggle("inactive_button");
        headerNav?.classList.toggle("appear");
    }
});
