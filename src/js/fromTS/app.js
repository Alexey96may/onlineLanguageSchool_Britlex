import * as flsFunctions from "./modules/functions.js";
function my_test(x) {
    var answer = x > 2 ? true : false;
    return answer;
}
my_test(24);
flsFunctions.isWebp();
var burger = document.getElementById("burger");
var cancelBurger = document.getElementById("cancel");
var body = document.querySelector("body");
var isMenuOpen = false;
var headerNav = document.getElementById("headerNav");
burger === null || burger === void 0 ? void 0 : burger.addEventListener("click", function (event) {
    event.stopPropagation();
    isMenuOpen = true;
    burger === null || burger === void 0 ? void 0 : burger.classList.toggle("inactive_button");
    body === null || body === void 0 ? void 0 : body.classList.toggle("inactive_field");
    headerNav === null || headerNav === void 0 ? void 0 : headerNav.classList.toggle("appear");
});
cancelBurger === null || cancelBurger === void 0 ? void 0 : cancelBurger.addEventListener("click", function (event) {
    event.stopPropagation();
    isMenuOpen = false;
    body === null || body === void 0 ? void 0 : body.classList.toggle("inactive_field");
    burger === null || burger === void 0 ? void 0 : burger.classList.toggle("inactive_button");
    headerNav === null || headerNav === void 0 ? void 0 : headerNav.classList.toggle("appear");
});
body === null || body === void 0 ? void 0 : body.addEventListener("click", function (event) {
    if (event.target.closest("#headerNav")) {
        return;
    }
    if (isMenuOpen) {
        isMenuOpen = false;
        body === null || body === void 0 ? void 0 : body.classList.toggle("inactive_field");
        burger === null || burger === void 0 ? void 0 : burger.classList.toggle("inactive_button");
        headerNav === null || headerNav === void 0 ? void 0 : headerNav.classList.toggle("appear");
    }
});
