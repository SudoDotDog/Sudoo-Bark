/**
 * @author WMXPY
 * @namespace Array
 * @description Compare
 */

export const difference = <T = any>(
    before: T[],
    after: T[],
    compareFunction: (first: T, second: T) => boolean = (first: T, second: T): boolean => first === second,
): [T[], T[]] => {

    if ((!Array.isArray(before)) || (!Array.isArray(after))) {
        return [[], []];
    }

    const added: T[] = [];
    outer: for (const element of after) {
        for (const each of before) {
            if (compareFunction(element, each)) {
                continue outer;
            }
        }
        added.push(element);
    }

    const removed: T[] = [];
    outer: for (const element of before) {
        for (const each of after) {
            if (compareFunction(element, each)) {
                continue outer;
            }
        }
        removed.push(element);
    }

    return [added, removed];
};

export const asyncDifference = async <T = any>(
    before: T[],
    after: T[],
    // eslint-disable-next-line @typescript-eslint/require-await
    compareFunction: (first: T, second: T) => Promise<boolean> = async (first: T, second: T): Promise<boolean> => first === second,
): Promise<[T[], T[]]> => {

    if ((!Array.isArray(before)) || (!Array.isArray(after))) {
        return [[], []];
    }

    const added: T[] = [];
    outer: for (const element of after) {
        for (const each of before) {
            if (await compareFunction(element, each)) {
                continue outer;
            }
        }
        added.push(element);
    }

    const removed: T[] = [];
    outer: for (const element of before) {
        for (const each of after) {
            if (await compareFunction(element, each)) {
                continue outer;
            }
        }
        removed.push(element);
    }

    return [added, removed];
};

export const same = <T = any>(
    first: T[],
    second: T[],
    compareFunction: (first: T, second: T) => boolean = (a: T, b: T): boolean => a === b,
): boolean => {

    if ((!Array.isArray(first)) || (!Array.isArray(second))) {
        return false;
    }

    const length: number = first.length;

    if (length !== second.length) {
        return false;
    }

    const compare: (first: T, second: T) => boolean =
        compareFunction ||
        ((firstElement: T, secondElement: T): boolean => {
            return firstElement === secondElement;
        });

    const sortedFirst: T[] = first.sort();
    const sortedSecond: T[] = second.sort();

    for (let i: number = 0; i < length; i++) {
        if (!compare(sortedFirst[i], sortedSecond[i])) {
            return false;
        }
    }

    return true;
};
