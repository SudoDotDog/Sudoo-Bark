/**
 * @author WMXPY
 * @namespace Map
 * @description Index
 */

import { elements, entries, extend, keys, mutate } from './common';
import { same } from './compare';
// eslint-disable-next-line camelcase
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
// eslint-disable-next-line camelcase
export { lash, lash_mutate };
export { same };

export default exportee;
