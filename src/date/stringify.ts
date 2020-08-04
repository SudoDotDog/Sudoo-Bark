/**
 * @author WMXPY
 * @namespace Date
 * @description Stringify
 */

import { fixDigitWithZero } from '../string/template';

export const stringifyDateLocal = (date: Date, format: string): string => {

    const result: string = format
        .replace(/yyyy/g, date.getFullYear().toString())
        .replace(/yy/g, date.getFullYear().toString().substring(2, 4))
        .replace(/mm/g, fixDigitWithZero(date.getMonth().toString(), 2))
        .replace(/dd/g, fixDigitWithZero(date.getDate().toString(), 2))
        .replace(/ww/g, fixDigitWithZero(date.getDay().toString(), 1))
        .replace(/hh/g, fixDigitWithZero(date.getHours().toString(), 2))
        .replace(/uu/g, fixDigitWithZero(date.getMinutes().toString(), 2))
        .replace(/ss/g, fixDigitWithZero(date.getSeconds().toString(), 2))
        .replace(/lll/g, fixDigitWithZero(date.getMilliseconds().toString(), 3));

    if (/area/.exec(result)) {

        const area: number = date.getTimezoneOffset();
        return result.replace(/area/g, `UTC${area >= 0 ? `+${area}` : `-${area}`}`);
    }

    return result;
};

export const stringifyDateUTC = (date: Date, format: string): string => {

    return format
        .replace(/yyyy/g, date.getUTCFullYear().toString())
        .replace(/yy/g, date.getUTCFullYear().toString().substring(2, 4))
        .replace(/mm/g, fixDigitWithZero(date.getUTCMonth().toString(), 2))
        .replace(/dd/g, fixDigitWithZero(date.getUTCDate().toString(), 2))
        .replace(/ww/g, fixDigitWithZero(date.getUTCDay().toString(), 1))
        .replace(/hh/g, fixDigitWithZero(date.getUTCHours().toString(), 2))
        .replace(/uu/g, fixDigitWithZero(date.getUTCMinutes().toString(), 2))
        .replace(/ss/g, fixDigitWithZero(date.getUTCSeconds().toString(), 2))
        .replace(/lll/g, fixDigitWithZero(date.getUTCMilliseconds().toString(), 3));
};
