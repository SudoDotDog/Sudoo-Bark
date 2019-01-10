/**
 * @author WMXPY
 * @namespace Array
 * @description Common
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { sample } from '../../src/array/common';

describe('Given Array common function', (): void => {

    describe('Given a [sample] function', () => {

        const chance: Chance.Chance = new Chance('array-common-sample');

        it('should be able to give sample', () => {

            const arr: string[] = chance.unique(chance.string, 5);

            expect(sample(arr)).to.be.oneOf(arr);
        });

        it('should be able to handle empty', () => {

            const arr: string[] = chance.unique(chance.string, 0);

            // tslint:disable-next-line
            expect(sample(arr)).to.be.undefined;
        });

        it('should be able to handle null or undefined', () => {

            // tslint:disable-next-line
            expect(sample(null as any)).to.be.undefined;
            // tslint:disable-next-line
            expect(sample(undefined as any)).to.be.undefined;
        });
    });
});
