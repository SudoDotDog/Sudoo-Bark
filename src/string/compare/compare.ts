/**
 * @author WMXPY
 * @namespace String
 * @description Compare
 */

import { StringModifier } from "./modifier";
import { similar } from "./similar";

export class StringCompare {

    private readonly _base: string;

    public constructor(base: string) {

        this._base = base;
    }

    public with(target: string): StringModifier {

        const base: string = this._base;
        const distance: number = similar(base, target);

        return new StringModifier(base, target, distance);
    }
}

export const compare = (base: string): StringCompare => {

    return new StringCompare(base);
};
