/**
 * @author WMXPY
 * @namespace Table
 * @description CSV Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { DefaultUniqueLength, MaxUniqueLength, random, unique } from '../../src/random/string';

describe('Given [random-string] helper functions', (): void => {

    const chance: Chance.Chance = new Chance('random-string');

    it('should be able to generate default random string', () => {

        const value: string = random();

        expect(value).to.have.lengthOf(DefaultUniqueLength);
    });

    it('should be able to generate random string with length', () => {

        const value: string = random(10);

        expect(value).to.have.lengthOf(10);
    });

    it('should be able to generate random string with any length', () => {

        const length: number = chance.natural();
        const value: string = random(length);

        expect(value).to.have.lengthOf(MaxUniqueLength);
    });

    it('should be able to generate default unique string', () => {

        const value: string = unique();

        expect(value).to.have.lengthOf(DefaultUniqueLength);
    });

    it('should be able to generate current unique string', () => {

        const current: Date = new Date();
        const value: string = unique(current);

        expect(value).to.be.equal(unique(current));
    });

    it('should be able to unique random string with any length', () => {

        const length: number = chance.natural();
        const value: string = unique(new Date(), length);

        expect(value).to.have.lengthOf(MaxUniqueLength);
    });
});
