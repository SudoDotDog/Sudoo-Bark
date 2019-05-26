/**
 * @author WMXPY
 * @namespace String
 * @description Index
 */

import { compare, StringCompare } from './compare/compare';
import { similar } from './compare/similar';
import { padLeft, padLeftZero, spaces } from './template';

const exportee = {
    compare,
    padLeft,
    padLeftZero,
    similar,
    spaces,
};

export { exportee as _String };
export { compare, StringCompare };
export { similar };
export { padLeft, padLeftZero, spaces };

export default exportee;
