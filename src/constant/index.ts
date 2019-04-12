/**
 * @author WMXPY
 * @namespace Constant
 * @description Index
 */

import { NumericBuffer } from './numeric';
import { Stepper } from './stepper';
import { StringBuffer } from './string';

const exportee = {
    NumericBuffer,
    Stepper,
    StringBuffer,
};

export { exportee as _Constant };
export { NumericBuffer, Stepper, StringBuffer };

export default exportee;
