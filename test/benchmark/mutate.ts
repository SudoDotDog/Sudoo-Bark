/**
 * @author WMXPY
 * @namespace Map
 * @description Mutate
 */

import { extend, mutate } from "../../src/map/common";

console.time('extend');

for (let i = 0; i < 1000; i ++) {

    extend({
        a: 1,
    } as Record<string, number>, 'b', 2);
}

console.timeEnd('extend');

console.time('mutate');

for (let i = 0; i < 1000; i ++) {

    mutate({
        a: 1,
    } as Record<string, number>, 'b', 2);
}

console.timeEnd('mutate');
