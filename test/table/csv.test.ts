/**
 * @author WMXPY
 * @namespace Table
 * @description CSV Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { stringifyDateLocal } from '../../src/date/stringify';
import { generate } from '../../src/table/csv';

describe('Given [generate] function', (): void => {

    const chance: Chance.Chance = new Chance('table-csv-generate');

    it('should be able to parse csv', () => {

        const header1: string = chance.string();
        const header2: string = chance.string();

        const value11: string = chance.string();
        const value12: string = chance.string();

        const value21: string = chance.string();
        const value22: string = chance.string();

        const target = [{
            [header1]: value11,
            [header2]: value12,
        }, {
            [header1]: value21,
            [header2]: value22,
        }];

        const result: string = generate(target);
        const expected: string = `${header1},${header2}\n${value11},${value12}\n${value21},${value22}`;

        expect(result).to.be.equal(expected);
    });
});
