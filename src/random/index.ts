/**
 * @author WMXPY
 * @namespace Random
 * @description Index
 */

import { DefaultUniqueLength, MaxUniqueLength, unique } from "./string";

const exportee = {
    unique,
};

export { exportee as _Random };
export { unique, MaxUniqueLength, DefaultUniqueLength };

export default exportee;
