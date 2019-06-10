/**
 * @author WMXPY
 * @namespace Array
 * @description Compare
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { difference, same } from '../../src/array';

describe('Given Array compare function', (): void => {

    describe('Given a [same] function', () => {

        const chance: Chance.Chance = new Chance('array-compare-same');

        it('should be able to false not array', () => {

            const arr: string[] = chance.unique(chance.string, 5);

            // tslint:disable-next-line
            expect(same(arr, undefined as any)).to.be.false;
        });

        it('should be able to false different length arrays', () => {

            const first: string[] = chance.unique(chance.string, 5);
            const second: string[] = chance.unique(chance.string, 4);

            // tslint:disable-next-line
            expect(same(first, second)).to.be.false;
        });

        it('should be able to false different arrays', () => {

            const first: string[] = chance.unique(chance.string, 5);
            const second: string[] = [...first];

            second[3] = chance.string();

            // tslint:disable-next-line
            expect(same(first, second)).to.be.false;
        });

        it('should be able to true same arrays', () => {

            const first: string[] = chance.unique(chance.string, 5);
            const second: string[] = [...first];

            // tslint:disable-next-line
            expect(same(first, second)).to.be.true;
        });
    });

    describe.only('Given a [difference] function', () => {

        const chance: Chance.Chance = new Chance('array-compare-difference');

        it('should be able to handle error pass in', () => {

            const result: [string[], string[]] = difference(null as any, []);

            expect(result).to.be.deep.equal([[], []]);
        });

        it('should be able to return empty', () => {

            const arr: string[] = chance.unique(chance.string, 5);

            const result: [string[], string[]] = difference(arr, arr);

            expect(result).to.be.deep.equal([[], []]);
        });

        it('should be able to return difference', () => {

            const added: string = chance.string();
            const original: string[] = chance.unique(chance.string, 5);
            const mutated: string[] = [...original, added];

            const result: [string[], string[]] = difference(original, mutated);

            expect(result).to.be.deep.equal([[added], []]);
        });

        it('should be able to handle complex array', () => {

            const arr: string[] = chance.unique(chance.string, 5);

            const original: string[] = [arr[0], arr[1], arr[3]];
            const mutated: string[] = [arr[0], arr[2], arr[4]];

            const result: [string[], string[]] = difference(original, mutated);

            expect(result).to.be.deep.equal([[arr[2], arr[4]], [arr[1], arr[3]]]);
        });

        it('should be able to handle complex array compare function', () => {

            const arr: any[] = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }];

            const original: any[] = [{ a: 0 }, arr[1], arr[3]];
            const mutated: any[] = [{ a: 0 }, arr[2], arr[4]];

            const result: [any[], any[]] = difference(original, mutated, (first: any, second: any) => first.a === second.a);

            expect(result).to.be.deep.equal([[arr[2], arr[4]], [arr[1], arr[3]]]);
        });
    });
});
