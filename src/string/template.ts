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

export const padLeftZero = (value: number, digits: number): string => {

    const parsed: string = value.toString();
    return padLeft(parsed, digits, '0');
};

export const padLeft = (current: string, length: number, content: string = ' '): string => {

    const difference: number = length - current.length;
    if (difference > 0) {

        return content.repeat(difference) + current;
    }

    return current;
};
