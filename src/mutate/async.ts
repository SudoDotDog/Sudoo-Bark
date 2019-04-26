/**
 * @author WMXPY
 * @namespace Mutate
 * @description Async
 */

export const asyncForEach = async <T = any>(arr: T[], func: (current: T, index: number, arr: T[]) => Promise<void>): Promise<void> => {

    const length: number = arr.length;

    for (let i = 0; i < length; i++) {
        await func(arr[i], i, arr);
    }
    return;
};

export const asyncMap = async <T = any, R = any>(arr: T[], func: (current: T, index: number, arr: T[]) => Promise<R>): Promise<R[]> => {

    const length: number = arr.length;
    const response: R[] = new Array(length);

    for (let i = 0; i < length; i++) {
        const result: R = await func(arr[i], i, arr);
        response[i] = result;
    }
    return response;
};

export const asyncReduce = async <T = any, R = any>(arr: T[], func: (previous: R, current: T, index: number, arr: T[]) => Promise<R>, initial: R): Promise<R> => {

    const length: number = arr.length;
    let current: R = initial;

    for (let i = 0; i < length; i++) {
        current = await func(current, arr[i], i, arr);
    }
    return current;
};

export const asyncFilter = async <T = any>(arr: T[], func: (current: T, index: number, arr: T[]) => Promise<boolean>): Promise<T[]> => {

    const length: number = arr.length;
    const response: T[] = [];

    for (let i = 0; i < length; i++) {
        const result: boolean = await func(arr[i], i, arr);
        if (result) {
            response.push(arr[i]);
        }
    }
    return response;
};
