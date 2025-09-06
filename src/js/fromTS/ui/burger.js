var Burger = /** @class */ (function () {
    function Burger() {
        var _this = this;
        var _a, _b, _c;
        this.BURGER_BUTTON = document.getElementById("burger");
        this.CANCEL_BUTON = document.getElementById("cancel");
        this.ACTIVE_FIELD = document.getElementById("activeField");
        this.BODY = document.querySelector("body");
        this.HEADER_NAV = document.getElementById("headerNav");
        this.isMenuOpen = false;
        (_a = this.BURGER_BUTTON) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (event) {
            event.stopPropagation();
            _this.isMenuOpen = true;
            _this.bBH_classesToggle();
            _this.changeOverflow(_this.BODY, "hidden");
        });
        (_b = this.CANCEL_BUTON) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function (event) {
            event.stopPropagation();
            _this.isMenuOpen = false;
            _this.bBH_classesToggle();
            _this.changeOverflow(_this.BODY, "auto");
        });
        (_c = this.BODY) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function (event) {
            var _a;
            if (event.target.closest("#headerNav")) {
                if (_this.isMenuOpen && ((_a = event.target.tagName) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === "a") {
                    _this.isMenuOpen = false;
                    _this.bBH_classesToggle();
                    _this.changeOverflow(_this.BODY, "auto");
                }
                return;
            }
            if (_this.isMenuOpen) {
                _this.isMenuOpen = false;
                _this.bBH_classesToggle();
                _this.changeOverflow(_this.BODY, "auto");
            }
        });
    }
    Burger.prototype.bBH_classesToggle = function () {
        var _a, _b, _c;
        (_a = this.ACTIVE_FIELD) === null || _a === void 0 ? void 0 : _a.classList.toggle("inactive_field");
        (_b = this.BURGER_BUTTON) === null || _b === void 0 ? void 0 : _b.classList.toggle("inactive_button");
        (_c = this.HEADER_NAV) === null || _c === void 0 ? void 0 : _c.classList.toggle("appear");
    };
    Burger.prototype.changeOverflow = function (element, overflowStyle) {
        if (element) {
            element.style.overflow = overflowStyle;
        }
    };
    return Burger;
}());
export { Burger };
