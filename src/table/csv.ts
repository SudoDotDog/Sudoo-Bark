/**
 * @author WMXPY
 * @namespace Table
 * @description CSV
 */

export const generate = (obj: Array<{
    [key: string]: number | string;
}>): string => obj.length > 0 ? [Object.keys(obj[0]).join(','), ...obj.map((current: {
    [key: string]: number | string;
}): string => Object.keys(current).map((key: string) => current[key].toString()).join(','))].join('\n') : '';
