/**
 * @author WMXPY
 * @namespace Mutate
 * @description Index
 */

import { asyncFilter, asyncForEach, asyncMap, asyncRebuild, asyncReduce } from './async';
import { asyncMax, asyncMin } from './complex';

const exportee = {
    asyncFilter,
    asyncForEach,
    asyncMap,
    asyncMax,
    asyncMin,
    asyncRebuild,
    asyncReduce,
};

export { exportee as _Mutate };
export { asyncFilter, asyncForEach, asyncMap, asyncRebuild, asyncReduce };
export { asyncMax, asyncMin };

export default exportee;
