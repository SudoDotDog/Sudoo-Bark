/**
 * @author WMXPY
 * @namespace Map
 * @description Common Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { elements, keys } from '../../src/map/common';

describe('Given [common] map related functions', (): void => {

    const chance: Chance.Chance = new Chance('map-common');

    describe('Given a [keys] function', (): void => {

        it('should able to return empty list', () => {

            const map: Record<string, string> = {};

            const result: string[] = keys(map);

            expect(result).to.be.deep.equal([]);
        });

        it('should able to return list of keys', () => {

            const key: string = chance.string();
            const element: string = chance.string();

            const map: Record<string, string> = {
                [key]: element,
            };

            const result: string[] = keys(map);

            expect(result).to.be.deep.equal([key]);
        });
    });

    describe('Given a [elements] function', (): void => {

        it('should able to return empty list', () => {

            const map: Record<string, string> = {};

            const result: string[] = elements(map);

            expect(result).to.be.deep.equal([]);
        });

        it('should able to return list of keys', () => {

            const key: string = chance.string();
            const element: string = chance.string();

            const map: Record<string, string> = {
                [key]: element,
            };

            const result: string[] = elements(map);

            expect(result).to.be.deep.equal([element]);
        });
    });
});
