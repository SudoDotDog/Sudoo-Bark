/**
 * @author WMXPY
 * @namespace Mock
 * @description Time
 */

import { Stepper } from "../../src/constant";

export class MockTime {

    public static create() {

        return new MockTime();
    }

    private readonly _stepper: Stepper;
    private readonly _setTimeoutListeners: Map<number, (func: () => void) => void>;

    private constructor() {

        this._stepper = Stepper.create();
        this._setTimeoutListeners = new Map<number, (func: () => void) => void>();
    }

    public getSetTimeout(): (func: () => void) => number {

        return (func: () => void): number => {

            const token: number = this._stepper.next();
            this._setTimeoutListeners.set(token, func);
            return token;
        };
    }

    public getClearTimeout(): (token: number) => void {

        return (token: number): void => {

            this._setTimeoutListeners.delete(token);
            return;
        };
    }
}
