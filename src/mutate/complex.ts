/**
 * @author WMXPY
 * @namespace Mutate
 * @description Complex
 */

export const asyncMax = async <T = any>(arr: T[], func: (current: T, index: number, arr: T[]) => Promise<number>): Promise<T> => {

    if (arr.length === 0) {
        return null as any;
    }

    const length: number = arr.length;
    let currentMax: number = Number.MIN_SAFE_INTEGER;
    let currentElement: T = arr[0] as T;

    for (let i = 0; i < length; i++) {
        const result: number = await func(arr[i], i, arr);
        if (currentMax < result) {
            currentMax = result;
            currentElement = arr[i];
        }
    }
    return currentElement;
};

export const asyncMin = async <T = any>(arr: T[], func: (current: T, index: number, arr: T[]) => Promise<number>): Promise<T> => {

    if (arr.length === 0) {
        return null as any;
    }

    const length: number = arr.length;
    let currentMin: number = Number.MAX_SAFE_INTEGER;
    let currentElement: T = arr[0] as T;

    for (let i = 0; i < length; i++) {
        const result: number = await func(arr[i], i, arr);
        if (currentMin > result) {
            currentMin = result;
            currentElement = arr[i];
        }
    }
    return currentElement;
};
