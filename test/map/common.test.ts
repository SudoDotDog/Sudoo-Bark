/**
 * @author WMXPY
 * @namespace Map
 * @description Common Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { elements, extend, keys, mutate } from '../../src/map/common';

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

    describe('Given a [extend] function', (): void => {

        it('should be able to extend a map', () => {

            const key: string = chance.string();
            const element: string = chance.string();

            const map: Record<string, string> = {
                [key]: element,
            };

            const newKey: string = chance.string();
            const newElement: string = chance.string();

            const result: Record<string, string> = extend(map, newKey, newElement);

            expect(result).to.be.deep.equal({
                [key]: element,
                [newKey]: newElement,
            });
        });

        it('should be able to replace a map', () => {

            const key: string = chance.string();
            const element: string = chance.string();

            const map: Record<string, string> = {
                [key]: element,
            };

            const newElement: string = chance.string();

            const result: Record<string, string> = extend(map, key, newElement);

            expect(result).to.be.deep.equal({
                [key]: newElement,
            });
        });
    });

    describe('Given a [mutate] function', (): void => {

        it('should be able to mutate a map', () => {

            const key: string = chance.string();
            const element: string = chance.string();

            const map: Record<string, string> = {
                [key]: element,
            };

            const newKey: string = chance.string();
            const newElement: string = chance.string();

            const result: Record<string, string> = mutate(map, newKey, newElement);

            expect(result).to.be.deep.equal({
                [key]: element,
                [newKey]: newElement,
            });
        });

        it('should be able to replace a map', () => {

            const key: string = chance.string();
            const element: string = chance.string();

            const map: Record<string, string> = {
                [key]: element,
            };

            const newElement: string = chance.string();

            const result: Record<string, string> = mutate(map, key, newElement);

            expect(result).to.be.deep.equal({
                [key]: newElement,
            });
        });
    });
});
