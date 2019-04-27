/**
 * @author WMXPY
 * @namespace Mutate
 * @description Index
 */

import { asyncFilter, asyncForEach, asyncMap, asyncReduce } from './async';
import { asyncFlatRebuild, asyncMax, asyncMin, asyncRebuild } from './complex';

const exportee = {
    asyncFilter,
    asyncFlatRebuild,
    asyncForEach,
    asyncMap,
    asyncMax,
    asyncMin,
    asyncRebuild,
    asyncReduce,
};

export { exportee as _Mutate };
export { asyncFilter, asyncForEach, asyncMap, asyncReduce };
export { asyncFlatRebuild, asyncMax, asyncMin, asyncRebuild };

export default exportee;
