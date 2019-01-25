/**
 * @author WMXPY
 * @namespace Map
 * @description Replace
 */

import { lash, lash_mutate } from "../../src/map/replace";

console.time('extend');

for (let i = 0; i < 1000; i ++) {

    lash({
        a: 1,
    } as Record<string, number>, 'b', 2);
}

console.timeEnd('extend');

console.time('mutate');

for (let i = 0; i < 1000; i ++) {

    lash_mutate({
        a: 1,
    } as Record<string, number>, 'b', 2);
}

console.timeEnd('mutate');
