/**
 * @author WMXPY
 * @namespace Array
 * @description Index
 */

import { car, cdr, clr, sample } from './common';

const exportee = {
    car,
    cdr,
    clr,
    sample,
};

export { exportee as _Array };
export { car, cdr, clr, sample };

export default exportee;
