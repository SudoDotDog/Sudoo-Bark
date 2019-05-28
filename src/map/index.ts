/**
 * @author WMXPY
 * @namespace Map
 * @description Index
 */

import { elements, entries, extend, keys, mutate } from './common';
import { same } from './compare';
import { lash, lash_mutate } from './replace';

const exportee = {
    elements,
    entries,
    extend,
    keys,
    lash,
    lash_mutate,
    mutate,
    same,
};

export { exportee as _Map };
export { elements, entries, extend, keys, mutate };
export { lash, lash_mutate };
export { same };

export default exportee;
