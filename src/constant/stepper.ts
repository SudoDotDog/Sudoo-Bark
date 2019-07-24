/**
 * @author WMXPY
 * @namespace Constant
 * @description Stepper
 */

export class Stepper {

    public static create(init: number = 0): Stepper {

        return new Stepper(init);
    }

    private _value: number;

    private constructor(init: number) {

        this._value = init;
    }

    public get value(): number {

        return this._value;
    }

    public next(step: number = 1): number {

        this._value = this._value + step;
        return this._value;
    }

    public down(value: number = 1): number {

        this._value = this._value - value;
        return this._value;
    }
}
