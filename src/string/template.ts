/**
 * @author WMXPY
 * @namespace String
 * @description Template
 */

export const spaces = (length: number): string => ' '.repeat(length);

export const fixDigitWithZero = (str: string, length: number): string => {

    if (str.length >= length) {
        return str;
    }
    return fixDigitWithZero('0' + str, length);
};
