/**
 * @author WMXPY
 * @namespace Array
 * @description Index
 */

import { car, cdr, clr, sample } from './common';
import { same } from './compare';

const exportee = {
    car,
    cdr,
    clr,
    same,
    sample,
};

export { exportee as _Array };
export { car, cdr, clr, sample };
export { same };

export default exportee;
