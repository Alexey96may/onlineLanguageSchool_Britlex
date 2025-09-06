import { NavFix } from "./navFixed.js";
function sum(a, b) {
    console.log(NavFix);
    return a + b;
}
test("adds 1 + 2 to equal 3", function () {
    expect(sum(1, 2)).toBe(3);
});
