var NavFix = /** @class */ (function () {
    function NavFix() {
        var _this = this;
        this.headerElement = document.getElementById("header");
        this.navHeightMult = 3;
        this.userPosition = 0;
        if (this.headerElement) {
            this.navHeight = this.headerElement.offsetHeight;
        }
        else {
            throw new Error('It Needs an element with id "header"');
        }
        document.addEventListener("scroll", function () {
            _this.userPosition = window.pageYOffset;
            if (_this.isNeedsFixing()) {
                _this.fixNavigation();
            }
        });
    }
    NavFix.prototype.isNeedsFixing = function () {
        if (this.navHeight * this.navHeightMult <= this.userPosition) {
            return true;
        }
        return false;
    };
    NavFix.prototype.fixNavigation = function () {
        var _a;
        (_a = this.headerElement) === null || _a === void 0 ? void 0 : _a.classList.add("header--fixed");
    };
    return NavFix;
}());
export { NavFix };
