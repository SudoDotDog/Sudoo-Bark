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

export const extend = <K extends RecordKeyType, T = any>(previous: Record<K, T>, key: K, value: T): Record<K, T> => {

    return {
        ...previous,
        [key]: value,
    } as Record<K, T>;
};

export const mutate = <K extends RecordKeyType, T = any>(previous: Record<K, T>, key: K, value: T): Record<K, T> => {

    previous[key] = value;
    return previous;
};
