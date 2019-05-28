/**
 * @author WMXPY
 * @namespace Mutate
 * @description Index
 */

import { asyncFilter, asyncForEach, asyncMap, asyncReduce } from './async';
import { asyncFlatRebuild, asyncMax, asyncMin, asyncPick, asyncPickWithout, asyncRebuild } from './complex';

const exportee = {
    asyncFilter,
    asyncFlatRebuild,
    asyncForEach,
    asyncMap,
    asyncMax,
    asyncMin,
    asyncPick,
    asyncPickWithout,
    asyncRebuild,
    asyncReduce,
};

export { exportee as _Mutate };
export { asyncFilter, asyncForEach, asyncMap, asyncReduce };
export { asyncFlatRebuild, asyncMax, asyncMin, asyncPick, asyncPickWithout, asyncRebuild };

export default exportee;
