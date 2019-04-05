/**
 * @author WMXPY
 * @namespace Random
 * @description Index
 */

import { DefaultUniqueLength, MaxUniqueLength, random, unique } from "./string";

const exportee = {
    random,
    unique,
};

export { exportee as _Random };
export { DefaultUniqueLength, MaxUniqueLength, random, unique };

export default exportee;
