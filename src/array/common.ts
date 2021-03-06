/**
 * @author WMXPY
 * @namespace Array
 * @description Common
 */

export const car = <T>(arr: T[]): T | undefined => arr[0] === undefined ? undefined : arr[0];

export const cdr = <T>(arr: T[]): T[] | undefined => {

    if (arr.length < 1) {
        return undefined;
    }

    return arr.slice(1, arr.length);
};

export const clr = <T>(arr: T[]): T | undefined => arr[arr.length - 1] === undefined ? undefined : arr[arr.length - 1];

export const sample = <T>(arr: T[]): T | undefined => {

    const length: number = Boolean(arr) ? arr.length : 0;
    if (length < 1) {
        return undefined;
    }

    return arr[Math.floor(Math.random() * length)];
};
