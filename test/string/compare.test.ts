/**
 * @author WMXPY
 * @namespace Test_String
 * @description Template Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { similar } from '../../src/string/compare';

describe('Given a [similarity] function', (): void => {

    const chance: Chance.Chance = new Chance('string-template-similarity');

    it('should be able to handle empty string', () => {
        const baseString: string = chance.string();
        const result: number = similar('', baseString);

        expect(result).to.be.equal(Infinity);
    });

    it('should get 0 with same strings', () => {
        const baseString: string = chance.string();
        const result: number = similar(baseString, baseString);

        expect(result).to.be.equal(0);
    });

    it('should get more than 1 with different strings', () => {
        const baseString: string = chance.string();
        const targetString: string = chance.string();

        const result: number = similar(baseString, targetString);

        expect(result).to.be.gte(1);
    });
});
