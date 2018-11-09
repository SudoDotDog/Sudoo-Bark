/**
 * @author WMXPY
 * @namespace String_Compare
 * @description Similar Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { compare } from '../../../src/string/compare/compare';

describe('Given a [compare] function', (): void => {

    const chance: Chance.Chance = new Chance('string-compare-compare');

    it('should return 0 when comparing same string', () => {

        const baseString: string = chance.string();

        const result: number = compare(baseString).with(baseString).distance;

        expect(result).to.be.equal(0);
    });

    it('should return length difference with doubled length string', () => {

        const baseString: string = chance.string();
        const targetString: string = baseString + baseString;

        const result: number = compare(baseString).with(targetString).distance;

        expect(result).to.be.equal(baseString.length);
    });

    it('should return length plus weight difference with doubled length string and modifier', () => {

        const baseString: string = chance.string();
        const targetString: string = baseString + baseString;
        const weight: number = chance.natural({ max: 10 });
        const expectDifference: number = weight / baseString.length;

        const result: number = compare(baseString).with(targetString).length(weight).distance;

        expect(result).to.be.equal(baseString.length + expectDifference);
    });
});
