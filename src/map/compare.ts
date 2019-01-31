/**
 * @author WMXPY
 * @namespace Map
 * @description Compare
 */

import { keys } from "./common";
import { RecordKeyType } from "./declare";

export const same = <K extends RecordKeyType, V>(first: Record<K, V>, second: Record<K, V>, compareFunction?: (first: V, second: V) => boolean): boolean => {

    const firstKeys: K[] = keys<K, V>(first);
    const secondKeys: K[] = keys<K, V>(second);

    const length: number = firstKeys.length;

    if (length !== secondKeys.length) {
        return false;
    }

    const compare: (first: V, second: V) => boolean =
        compareFunction ||
        ((firstElement: V, secondElement: V): boolean => {
            return firstElement === secondElement;
        });

    const sortedFirst: K[] = firstKeys.sort();
    const sortedSecond: K[] = secondKeys.sort();

    for (let i: number = 0; i < length; i++) {
        if (!compare(first[sortedFirst[i]], second[sortedSecond[i]])) {
            return false;
        }
    }

    return true;
};
