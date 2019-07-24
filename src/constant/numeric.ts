/**
 * @author WMXPY
 * @namespace Constant
 * @description Numeric
 */

export class NumericBuffer {

    public static create(init: number = 0): NumericBuffer {

        return new NumericBuffer(init);
    }

    private _value: number;

    private constructor(init: number) {

        this._value = init;
    }

    public get value(): number {

        return this._value;
    }

    public add(value: number): this {

        this._value = this._value + value;
        return this;
    }

    public minus(value: number): this {

        this._value = this._value - value;
        return this;
    }

    public times(value: number): this {

        this._value = this._value * value;
        return this;
    }

    public divide(value: number): this {

        this._value = this._value / value;
        return this;
    }
}
