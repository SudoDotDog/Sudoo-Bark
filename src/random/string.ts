/**
 * @author WMXPY
 * @namespace Random
 * @description String
 */

export const DefaultUniqueLength: number = 8;
export const DigitParsing: number = 36;
export const MaxUniqueLength: number = 255;

export const random = (length: number = DefaultUniqueLength, prefix?: string): string => {

    const realLength: number = Math.min(length, MaxUniqueLength);

    const getSlice: () => string = () => Math.random().toString(DigitParsing).substring(2, DefaultUniqueLength + 2);

    const setLength: number = Math.floor(realLength / DefaultUniqueLength);
    const sets: string = new Array(setLength).fill(undefined).map(getSlice).join('');

    const tailLength: number = realLength % DefaultUniqueLength;

    if (tailLength) {
        return sets + getSlice().substring(0, tailLength);
    }

    if (prefix) {
        return prefix + sets;
    }
    return sets;
};

export const unique = (date: Date = new Date(), length: number = DefaultUniqueLength, prefix?: string): string => {

    const realLength: number = Math.min(length, MaxUniqueLength);

    const getSlice: () => string = () => date.getTime().toString(DigitParsing).substring(0, DefaultUniqueLength);

    const setLength: number = Math.floor(realLength / DefaultUniqueLength);
    const sets: string = new Array(setLength).fill(undefined).map(getSlice).join('');

    const tailLength: number = realLength % DefaultUniqueLength;

    if (tailLength) {
        return sets + getSlice().substring(0, tailLength);
    }

    if (prefix) {
        return prefix + sets;
    }
    return sets;
};

export const trustable = (
    date: Date = new Date(),
    dateLength: number = DefaultUniqueLength,
    randomLength: number = DefaultUniqueLength,
    prefix?: string,
): string => {

    return unique(date, dateLength, prefix) + random(randomLength, prefix);
};
