/**
 * @author WMXPY
 * @namespace Time
 * @description Index
 */

import { SetTimeoutBuffer } from './buffer';
import { debounce } from './debounce';

const exportee = {
    SetTimeoutBuffer,
    debounce,
};

export { exportee as _Time };
export { SetTimeoutBuffer, debounce };

export default exportee;
