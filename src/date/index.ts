/**
 * @author WMXPY
 * @namespace Date
 * @description Index
 */

import { stringifyDateLocal, stringifyDateUTC } from './stringify';

const exportee = {
    stringifyDateLocal,
    stringifyDateUTC,
};

export { exportee as _Date };
export { stringifyDateLocal, stringifyDateUTC };

export default exportee;
