/**
 * @author WMXPY
 * @namespace Time
 * @description Buffer
 */

export class SetTimeoutBuffer {

    public static create(func: () => void, time: number): SetTimeoutBuffer {

        return new SetTimeoutBuffer(func, time);
    }

    private token: any;
    private readonly _func: () => void;
    private readonly _time: number;

    private constructor(func: () => void, time: number) {

        this._func = func;
        this._time = time;
    }

    public start(setFunction: (handler: () => any, time?: number) => any = setTimeout): this {

        this.token = setFunction(this._func, this._time);
        return this;
    }
}
