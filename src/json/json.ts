/**
 * @author WMXPY
 * @namespace Json
 * @description Json
 */

export const safeParse = <T>(content: string, whenError: Error): T => {

    try {
        const parsed: T = JSON.parse(content);
        return parsed;
    } catch (error) {
        throw whenError;
    }
};

export const nullableParse = <T>(content: string): T | null => {

    try {
        const parsed: T = JSON.parse(content);
        return parsed;
    } catch (error) {
        return null;
    }
};

export const formatStringify = <T extends any>(structure: T, spaces: number = 2): string => {

    return JSON.stringify(structure, null, spaces);
};
