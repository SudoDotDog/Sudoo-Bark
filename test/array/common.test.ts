/* eslint-disable @typescript-eslint/unbound-method */
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

            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            expect(sample(arr)).to.be.undefined;
        });

        it('should be able to handle null or undefined', () => {

            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            expect(sample(null as any)).to.be.undefined;
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            expect(sample(undefined as any)).to.be.undefined;
        });
    });
});
