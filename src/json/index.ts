/**
 * @author WMXPY
 * @namespace Json
 * @description Index
 */

import { formatStringify, nullableParse, safeParse } from "./json";

const exportee = {
    formatStringify,
    nullableParse,
    safeParse,
};

export { exportee as _Json };
export { formatStringify, nullableParse, safeParse };

export default exportee;
