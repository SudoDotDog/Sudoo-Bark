/**
 * @author WMXPY
 * @namespace Mutate
 * @description Async
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { asyncFilter, asyncMap, asyncRebuild, asyncReduce } from '../../src/mutate/async';

describe('Given [Mutate-Async] helper functions', (): void => {

    const chance: Chance.Chance = new Chance('mutate-async');

    const getSmallRandomNumber = () => chance.natural({ min: 0, max: 100 });

    describe('Given a [AsyncFilter] function', () => {

        it('should be able to return filtered', async (): Promise<void> => {

            const from: number[] = [0, 1, 2];

            const func = async (value: number, index: number, arr: number[]): Promise<boolean> => {
                return value % 2 === 0;
            };

            expect(await asyncFilter(from, func)).to.be.deep.equal([0, 2]);
        });
    });

    describe('Given a [AsyncMap] function', () => {

        it('should be able to return mapped', async (): Promise<void> => {

            const num1: number = getSmallRandomNumber();
            const num2: number = getSmallRandomNumber();
            const num3: number = getSmallRandomNumber();
            const from: number[] = [num1, num2, num3];

            const func = async (value: number, index: number, arr: number[]): Promise<number> => {
                return value + index + arr.length;
            };

            expect(await asyncMap(from, func)).to.be.deep.equal([num1 + 3, num2 + 4, num3 + 5]);
        });
    });

    describe('Given a [AsyncReduce] function', () => {

        it('should be able to return reduced', async (): Promise<void> => {

            const num1: number = getSmallRandomNumber();
            const num2: number = getSmallRandomNumber();
            const num3: number = getSmallRandomNumber();
            const from: number[] = [num1, num2, num3];

            const func = async (previous: number, value: number, index: number, arr: number[]): Promise<number> => {
                return previous + value + index + arr.length;
            };

            expect(await asyncReduce(from, func, 0)).to.be.deep.equal(num1 + num2 + num3 + 3 + 9);
        });
    });

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
});
