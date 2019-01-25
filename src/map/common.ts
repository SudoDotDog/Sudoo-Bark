/**
 * @author WMXPY
 * @namespace Map
 * @description Common
 */

import { RecordKeyType } from "./declare";

export const keys = <K extends RecordKeyType, T = any>(map: Record<K, T>): K[] => {

    const list: K[] = [];

    for (const key in map) list.push(key);
    return list;
};

export const elements = <K extends RecordKeyType, T = any>(map: Record<K, T>): T[] => {

    const list: T[] = [];

    for (const key in map) if (map[key]) list.push(map[key]);
    return list;
};
