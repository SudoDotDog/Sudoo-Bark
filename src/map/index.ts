/**
 * @author WMXPY
 * @namespace Map
 * @description Index
 */

import { elements, keys } from './common';
import { same } from './compare';
import { lash, lash_mutate } from './replace';

const exportee = {
    elements,
    keys,
    lash,
    lash_mutate,
    same,
};

export { exportee as _Map };
export { elements, keys };
export { lash, lash_mutate };
export { same };

export default exportee;
