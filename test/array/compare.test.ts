/**
 * @author WMXPY
 * @namespace Array
 * @description Compare
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { same } from '../../src/array';

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
});
