/**
 * @author WMXPY
 * @namespace Array
 * @description Index
 */

import { car, cdr, clr, sample } from './common';
import { difference, same } from './compare';

const exportee: Record<string, any> = {
    car,
    cdr,
    clr,
    difference,
    same,
    sample,
};

export { exportee as _Array };
export { car, cdr, clr, sample };
export { difference, same };

export default exportee;
