/**
 * @author WMXPY
 * @namespace Date
 * @description Stringify Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { stringifyDateLocal } from '../../src/date/stringify';

describe('Given [stringifyDateLocal] and [stringifyDateUTC] function', (): void => {

    describe('Given a [stringifyDateLocal] function', () => {

        const chance: Chance.Chance = new Chance('date-stringify-date-local');

        it('should be able to parse simple format', () => {
            const date: Date = chance.date();
            const format: string = 'yyyy,dd';
            const expected: string = `${date.getFullYear()},${date.getDate()}`;

            expect(stringifyDateLocal(date, format)).to.be.equal(expected);
        });
    });
});
