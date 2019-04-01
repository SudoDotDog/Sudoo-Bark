/**
 * @author WMXPY
 * @namespace Unique
 * @description Unique
 */

export const DefaultUniqueLength: number = 6;
export const MaxUniqueLength: number = 255;

export const unique = (length: number = DefaultUniqueLength): string => {

    const realLength: number = Math.min(length, MaxUniqueLength);

    const getSlice: () => string = () => Math.random().toString(36).substring(2, 8);

    const setLength: number = Math.floor(realLength / 6);
    const sets: string = new Array(setLength).fill(undefined).map(getSlice).join('');

    const tailLength: number = realLength % 6;

    if (tailLength) {
        return sets + getSlice().substring(0, tailLength);
    }
    return sets;
}
