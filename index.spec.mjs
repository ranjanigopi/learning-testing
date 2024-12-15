import { describe, expect, it } from "vitest";
import { add, subtract, multiply } from "./index.mjs";

describe('given 2 numbers', () => {
    describe('when added', () => {
        it('should return the sum', () => {
            expect(add(2, 3)).toEqual(5);
        });
    });
    describe('when subtracted', () => {
        it('should return the difference', () => {
            expect(subtract(2, 3)).toEqual(-1);
        });
    });
    describe('when multiplied', () => {
        it('should return the product', () => {
            expect(multiply(2, 3)).toEqual(6);
        });
    });
});

// given
// when
// then

// given 2 numbers
// when added them
// then it should return sum of the two numbers