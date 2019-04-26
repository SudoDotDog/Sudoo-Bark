/**
 * @author WMXPY
 * @namespace Mutate
 * @description Index
 */

import { asyncFilter, asyncForEach, asyncMap, asyncReduce } from './async';
import { asyncMax, asyncMin, asyncRebuild } from './complex';

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
export { asyncFilter, asyncForEach, asyncMap, asyncReduce };
export { asyncMax, asyncMin, asyncRebuild };

export default exportee;
