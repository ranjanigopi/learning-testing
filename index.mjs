export const add = (a, b) => a + b;

export const subtract = (a, b) => a - b;

export const multiply = (a, b) => a * b;

export const divide = (a, b) => {
    if (b === 0) {
        return Infinity;
    }

    return a / b;
}

export const square = (a) => a * a;