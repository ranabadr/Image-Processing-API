"use strict";
var multiply = function (num1, num2) {
    return num1 * num2;
};
it("Should be equal", function () {
    expect(multiply(1, 2)).toEqual(2);
});
