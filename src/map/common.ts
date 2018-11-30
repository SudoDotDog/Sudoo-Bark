/**
 * @author WMXPY
 * @namespace Map
 * @description Common
 */

export const keys = <T>(map: {
    [key: string]: T;
}): T[] => {

    const list: T[] = [];

    for (const key in map) if (map[key]) list.push(map[key]);
    return list;
};
