/**
 * @author WMXPY
 * @namespace Constant
 * @description Index
 */

import { NumericBuffer } from './numeric';
import { StringBuffer } from './string';

const exportee = {
    NumericBuffer,
    StringBuffer,
};

export { exportee as _Constant };
export { NumericBuffer, StringBuffer };

export default exportee;
