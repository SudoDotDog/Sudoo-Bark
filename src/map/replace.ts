/**
 * @author WMXPY
 * @namespace Map
 * @description Replace
 */

import { keys } from "../map/common";
import { RecordKeyType } from "./declare";

export const lash = <K extends RecordKeyType, T = any>
    (object: Record<K, T>, key: K, value: T, newKey?: K): Record<K, T> => {

    const keyList: K[] = keys<K, T>(object);
    if (!keyList.includes(key)) {
        return {
            ...object,
            [key]: value,
        } as Record<K, T>;
    }

    const newObject: Record<K, T> = keyList.reduce(

        (previous: Record<K, T>, current: K) => {

            if (key === current) {

                if (newKey && key !== newKey) {

                    return {
                        ...previous,
                        [newKey]: value,
                    } as Record<K, T>;
                } else {

                    return {
                        ...previous,
                        [current]: value,
                    } as Record<K, T>;
                }
            }

            return {
                ...previous,
                [current]: object[current],
            } as Record<K, T>;
        }, {} as Record<K, T>) as Record<K, T>;

    return newObject;
};
