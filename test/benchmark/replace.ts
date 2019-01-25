/**
 * @author WMXPY
 * @namespace Map
 * @description Replace
 */

import { lash, lash_mutate } from "../../dist/map/replace";

console.time('extend');

for (let i = 0; i < 1000; i++) {

    lash({
        a: 1,
        b: 2,
        d: 15,
    } as Record<string, number>, 'a', 2, 'c');
}

console.timeEnd('extend');

console.time('mutate');

for (let i = 0; i < 1000; i++) {

    lash_mutate({
        a: 1,
        b: 2,
        d: 15,
    } as Record<string, number>, 'a', 2, 'c');
}

console.timeEnd('mutate');
