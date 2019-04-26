/**
 * @author WMXPY
 * @namespace Array
 * @description Async
 */

export const asyncMap = async <T = any, R = any>(arr: T[], func: (current: T, index: number, arr: T[]) => R): Promise<any> => {

    const response: R[] = [];
    const length: number = arr.length;

    for (let i = 0; i < length; i++) {
        const result: R = await func(arr[i], i, arr);
        response.push(result);
    }

    return response;
};
