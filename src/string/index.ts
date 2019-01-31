/**
 * @author WMXPY
 * @namespace String
 * @description Index
 */

import { compare } from './compare/compare';
import { similar } from './compare/similar';
import { spaces } from './template';

const exportee = {
    compare,
    similar,
    spaces,
};

export { exportee as _String };
export { compare };
export { similar };
export { spaces };

export default exportee;
