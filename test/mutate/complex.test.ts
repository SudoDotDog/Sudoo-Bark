/**
 * @author WMXPY
 * @namespace Mutate
 * @description Complex
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { asyncFlatRebuild, asyncMax, asyncMin, asyncRebuild } from '../../src/mutate/complex';

describe('Given [Mutate-Complex] helper functions', (): void => {

    const chance: Chance.Chance = new Chance('mutate-complex');

    const getSmallRandomNumber = () => chance.natural({ min: 0, max: 100 });

    describe('Given a [AsyncRebuild] function', () => {

        it('should be able to return rebuilt', async (): Promise<void> => {

            const num1: number = getSmallRandomNumber();
            const num2: number = getSmallRandomNumber();
            const num3: number = getSmallRandomNumber();
            const from: number[] = [num1, num2, num3];

            const func = async (value: number, index: number, arr: number[]): Promise<number | undefined> => {
                if (index % 2 === 0) {
                    return value + arr.length;
                }
                return;
            };

            expect(await asyncRebuild(from, func)).to.be.deep.equal([num1 + 3, num3 + 3]);
        });

        it('should be able to return timeout rebuilt', async (): Promise<void> => {

            const num1: number = getSmallRandomNumber();
            const num2: number = getSmallRandomNumber();
            const num3: number = getSmallRandomNumber();
            const from: number[] = [num1, num2, num3];

            const func = (value: number, index: number, arr: number[]): Promise<number | undefined> =>
                new Promise<number | undefined>((resolve: (value?: number) => void) => {
                    setTimeout(() => {
                        if (index % 2 === 0) {
                            resolve(value + arr.length);
                        }
                        resolve();
                    }, 1);
                });

            expect(await asyncRebuild(from, func)).to.be.deep.equal([num1 + 3, num3 + 3]);
        });
    });

    describe('Given a [AsyncFlatRebuild] function', () => {

        it('should be able to return rebuilt without flatten', async (): Promise<void> => {

            const num1: number = getSmallRandomNumber();
            const num2: number = getSmallRandomNumber();
            const num3: number = getSmallRandomNumber();
            const from: number[] = [num1, num2, num3];

            const func = async (value: number, index: number, arr: number[]): Promise<number | undefined> => {
                if (index % 2 === 0) {
                    return value + arr.length;
                }
                return;
            };

            expect(await asyncRebuild(from, func)).to.be.deep.equal([num1 + 3, num3 + 3]);
        });

        it('should be able to return rebuilt flatten', async (): Promise<void> => {

            const num1: number = getSmallRandomNumber();
            const num2: number = getSmallRandomNumber();
            const num3: number = getSmallRandomNumber();
            const from: number[] = [num1, num2, num3];

            const func = async (value: number, index: number, arr: number[]): Promise<number | number[] | undefined> => {
                if (index % 2 === 0) {
                    return value + arr.length;
                }
                return [value, value];
            };

            expect(await asyncFlatRebuild(from, func)).to.be.deep.equal([num1 + 3, num2, num2, num3 + 3]);
        });
    });

    describe('Given a [AsyncMax] function', () => {

        it('should be able to return maximum value', async (): Promise<void> => {

            const num1: number = getSmallRandomNumber();
            const num2: number = getSmallRandomNumber();
            const num3: number = getSmallRandomNumber();
            const from: number[] = [num1, num2, num3];

            const max: number = Math.max(...from);

            const func = async (value: number): Promise<number> => {
                return value;
            };

            expect(await asyncMax(from, func)).to.be.deep.equal(max);
        });
    });

    describe('Given a [AsyncMin] function', () => {

        it('should be able to return minimum value', async (): Promise<void> => {

            const num1: number = getSmallRandomNumber();
            const num2: number = getSmallRandomNumber();
            const num3: number = getSmallRandomNumber();
            const from: number[] = [num1, num2, num3];

            const min: number = Math.min(...from);

            const func = async (value: number): Promise<number> => {
                return value;
            };

            expect(await asyncMin(from, func)).to.be.deep.equal(min);
        });
    });
});
