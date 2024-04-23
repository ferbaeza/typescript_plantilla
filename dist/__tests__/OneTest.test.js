"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.suma = void 0;
const suma = (a, b) => a + b;
exports.suma = suma;
describe("OneTest", () => {
    it("should return 3", () => {
        expect((0, exports.suma)(1, 2)).toBe(3);
    });
});
const succesCases = [
    [1, 2, 3],
    [2, 2, 4],
    [3, 2, 5]
];
describe.each(succesCases)("OneTest", (a, b, expected) => {
    it(`should return ${expected}`, () => {
        expect((0, exports.suma)(a, b)).toBe(expected);
    });
});
//# sourceMappingURL=OneTest.test.js.map