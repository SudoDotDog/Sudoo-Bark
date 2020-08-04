/**
 * @author WMXPY
 * @namespace Map
 * @description Replace Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
// eslint-disable-next-line camelcase
import { lash, lash_mutate } from '../../src/map/replace';

describe('Given [replace] map related functions', (): void => {

    const chance: Chance.Chance = new Chance('map-replace');

    describe('Given a [lash] function', (): void => {

        it('should be able to replace single value', () => {

            const key: string = chance.string();
            const element: string = chance.string();

            const key2: string = chance.string();
            const element2: string = chance.string();

            const map: Record<string, string> = {
                [key]: element,
                [key2]: element2,
            };

            const newElement: string = chance.string();

            const result: Record<string, string> = lash(map, key, newElement);

            expect(result).to.be.deep.equal({
                [key]: newElement,
                [key2]: element2,
            });
        });

        it('should be able to add single value', () => {

            const key: string = chance.string();
            const element: string = chance.string();

            const key2: string = chance.string();
            const element2: string = chance.string();

            const map: Record<string, string> = {
                [key]: element,
                [key2]: element2,
            };

            const newKey: string = chance.string();
            const newElement: string = chance.string();

            const result: Record<string, string> = lash(map, newKey, newElement);

            expect(result).to.be.deep.equal({
                [key]: element,
                [key2]: element2,
                [newKey]: newElement,
            });
        });

        it('should be able to replace single key', () => {

            const key: string = chance.string();
            const element: string = chance.string();

            const key2: string = chance.string();
            const element2: string = chance.string();

            const map: Record<string, string> = {
                [key]: element,
                [key2]: element2,
            };

            const newKey: string = chance.string();

            const result: Record<string, string> = lash(map, key, element, newKey);

            expect(result).to.be.deep.equal({
                [newKey]: element,
                [key2]: element2,
            });
        });

        it('should be able to replace single key and value', () => {

            const key: string = chance.string();
            const element: string = chance.string();

            const key2: string = chance.string();
            const element2: string = chance.string();

            const map: Record<string, string> = {
                [key]: element,
                [key2]: element2,
            };

            const newKey: string = chance.string();
            const newElement: string = chance.string();

            const result: Record<string, string> = lash(map, key, newElement, newKey);

            expect(result).to.be.deep.equal({
                [newKey]: newElement,
                [key2]: element2,
            });
        });
    });

    describe('Given a [lash_mutate] function', (): void => {

        it('should be able to replace single value', () => {

            const key: string = chance.string();
            const element: string = chance.string();

            const key2: string = chance.string();
            const element2: string = chance.string();

            const map: Record<string, string> = {
                [key]: element,
                [key2]: element2,
            };

            const newElement: string = chance.string();

            const result: Record<string, string> = lash_mutate(map, key, newElement);

            expect(result).to.be.deep.equal({
                [key]: newElement,
                [key2]: element2,
            });
        });

        it('should be able to add single value', () => {

            const key: string = chance.string();
            const element: string = chance.string();

            const key2: string = chance.string();
            const element2: string = chance.string();

            const map: Record<string, string> = {
                [key]: element,
                [key2]: element2,
            };

            const newKey: string = chance.string();
            const newElement: string = chance.string();

            const result: Record<string, string> = lash_mutate(map, newKey, newElement);

            expect(result).to.be.deep.equal({
                [key]: element,
                [key2]: element2,
                [newKey]: newElement,
            });
        });

        it('should be able to replace single key', () => {

            const key: string = chance.string();
            const element: string = chance.string();

            const key2: string = chance.string();
            const element2: string = chance.string();

            const map: Record<string, string> = {
                [key]: element,
                [key2]: element2,
            };

            const newKey: string = chance.string();

            const result: Record<string, string> = lash_mutate(map, key, element, newKey);

            expect(result).to.be.deep.equal({
                [newKey]: element,
                [key2]: element2,
            });
        });

        it('should be able to replace single key and value', () => {

            const key: string = chance.string();
            const element: string = chance.string();

            const key2: string = chance.string();
            const element2: string = chance.string();

            const map: Record<string, string> = {
                [key]: element,
                [key2]: element2,
            };

            const newKey: string = chance.string();
            const newElement: string = chance.string();

            const result: Record<string, string> = lash_mutate(map, key, newElement, newKey);

            expect(result).to.be.deep.equal({
                [newKey]: newElement,
                [key2]: element2,
            });
        });
    });
});
