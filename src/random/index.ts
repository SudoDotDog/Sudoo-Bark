/**
 * @author WMXPY
 * @namespace Random
 * @description Index
 */

import { DefaultUniqueLength, MaxUniqueLength, random, trustable, unique } from "./string";

const exportee = {
    random,
    unique,
    trustable,
};

export { exportee as _Random };
export { DefaultUniqueLength, MaxUniqueLength, random, trustable, unique };

export default exportee;
