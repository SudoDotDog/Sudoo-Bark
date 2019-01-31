/**
 * @author WMXPY
 * @namespace String
 * @description Index
 */

import { compare, StringCompare } from './compare/compare';
import { similar } from './compare/similar';
import { spaces } from './template';

const exportee = {
    compare,
    similar,
    spaces,
};

export { exportee as _String };
export { compare, StringCompare };
export { similar };
export { spaces };

export default exportee;
