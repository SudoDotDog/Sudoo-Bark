/**
 * @author WMXPY
 * @namespace Table
 * @description CSV Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { unique } from '../../src/random';
import { MaxUniqueLength } from '../../src/random/string';

describe('Given [random-string] helper functions', (): void => {

    const chance: Chance.Chance = new Chance('random-string');

    it('should be able to generate default random string', () => {

        const value: string = unique();

        expect(value).to.have.lengthOf(6);
    });

    it('should be able to generate random string with length', () => {

        const value: string = unique(10);

        expect(value).to.have.lengthOf(10);
    });

    it('should be able to generate random string with any length', () => {

        const length: number = chance.natural();
        const value: string = unique(length);

        expect(value).to.have.lengthOf(MaxUniqueLength);
    });
});
