import { describe, expect, it } from "vitest";
import { add, subtract, multiply, divide, square } from "./index.mjs";

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
    describe('when divided', () => {
        it('should return the quotient', () => {
            expect(divide(4, 2)).toEqual(2);
        });

        it('should return infinity if b is 0', () => {
            expect(divide(4, 0)).toEqual(Infinity);
        })
    });
    describe('when squaring', () => {
        it('should return multiple of itself', () => {
            expect(square(4)).toEqual(16);
        })
    })
});

// given
// when
// then

// given 2 numbers
// when added them
// then it should return sum of the two numbers