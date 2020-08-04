/* eslint-disable @typescript-eslint/unbound-method */
/**
 * @author WMXPY
 * @namespace Array
 * @description Compare
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { difference, same } from '../../src/array';
import { asyncDifference } from '../../src/array/compare';

describe('Given Array compare function', (): void => {

    describe('Given a [same] function', () => {

        const chance: Chance.Chance = new Chance('array-compare-same');

        it('should be able to false not array', () => {

            const arr: string[] = chance.unique(chance.string, 5);

            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            expect(same(arr, undefined as any)).to.be.false;
        });

        it('should be able to false different length arrays', () => {

            const first: string[] = chance.unique(chance.string, 5);
            const second: string[] = chance.unique(chance.string, 4);

            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            expect(same(first, second)).to.be.false;
        });

        it('should be able to false different arrays', () => {

            const first: string[] = chance.unique(chance.string, 5);
            const second: string[] = [...first];

            second[3] = chance.string();

            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            expect(same(first, second)).to.be.false;
        });

        it('should be able to true same arrays', () => {

            const first: string[] = chance.unique(chance.string, 5);
            const second: string[] = [...first];

            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            expect(same(first, second)).to.be.true;
        });
    });

    describe('Given a [difference] function', () => {

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

    describe('Given a [asyncDifference] function', () => {

        const chance: Chance.Chance = new Chance('array-compare-asyncDifference');

        it('should be able to handle error pass in', async (): Promise<void> => {

            const result: [string[], string[]] = await asyncDifference(null as any, []);

            expect(result).to.be.deep.equal([[], []]);
        });

        it('should be able to return empty', async (): Promise<void> => {

            const arr: string[] = chance.unique(chance.string, 5);

            const result: [string[], string[]] = await asyncDifference(arr, arr);

            expect(result).to.be.deep.equal([[], []]);
        });

        it('should be able to return difference', async (): Promise<void> => {

            const added: string = chance.string();
            const original: string[] = chance.unique(chance.string, 5);
            const mutated: string[] = [...original, added];

            const result: [string[], string[]] = await asyncDifference(original, mutated);

            expect(result).to.be.deep.equal([[added], []]);
        });

        it('should be able to handle complex array', async (): Promise<void> => {

            const arr: string[] = chance.unique(chance.string, 5);

            const original: string[] = [arr[0], arr[1], arr[3]];
            const mutated: string[] = [arr[0], arr[2], arr[4]];

            const result: [string[], string[]] = await asyncDifference(original, mutated);

            expect(result).to.be.deep.equal([[arr[2], arr[4]], [arr[1], arr[3]]]);
        });

        it('should be able to handle complex array compare function', async (): Promise<void> => {

            const arr: any[] = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }];

            const original: any[] = [{ a: 0 }, arr[1], arr[3]];
            const mutated: any[] = [{ a: 0 }, arr[2], arr[4]];

            // eslint-disable-next-line @typescript-eslint/require-await
            const result: [any[], any[]] = await asyncDifference(original, mutated, async (first: any, second: any): Promise<boolean> => first.a === second.a);

            expect(result).to.be.deep.equal([[arr[2], arr[4]], [arr[1], arr[3]]]);
        });
    });
});
