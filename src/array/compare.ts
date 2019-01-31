/**
 * @author WMXPY
 * @namespace Array
 * @description Compare
 */

export const same = <T>(first: T[], second: T[], compareFunction?: (first: T, second: T) => boolean): boolean => {

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
