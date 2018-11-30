/**
 * @author WMXPY
 * @namespace Map
 * @description Common
 */

export const keys = <T = any>(map: {
    [key: string]: T;
}): string[] => {

    const list: string[] = [];

    for (const key in map) list.push(key);
    return list;
};

export const elements = <T = any>(map: {
    [key: string]: T;
}): T[] => {

    const list: T[] = [];

    for (const key in map) if (map[key]) list.push(map[key]);
    return list;
};
