/**
 * @author WMXPY
 * @namespace String
 * @description Modifier
 */

export class StringModifier {

    private readonly _base: string;
    private readonly _target: string;

    private _distance: number;

    public constructor(base: string, target: string, distance: number) {

        this._base = base;
        this._target = target;
        this._distance = distance;
    }

    public get distance(): number {

        return this._distance;
    }

    public length(weight: number = 1): StringModifier {

        const difference: number = Math.abs(this._base.length - this._target.length);
        if (difference !== 0) {
            this._distance += weight / difference;
        }
        return this;
    }

    public contain(weight: number = 3): StringModifier {

        if (this._target.includes(this._base)) {
            this._distance -= weight;
        }
        return this;
    }

    public unsensitiveContain(weight: number = 3): StringModifier {

        const base = this._base.toLowerCase().replace(' ', '');
        const target = this._target.toLowerCase().replace(' ', '');
        if (target.includes(base)) {
            this._distance -= weight;
        }
        return this;
    }
}
