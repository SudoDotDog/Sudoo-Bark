/**
 * @author WMXPY
 * @namespace Map
 * @description Compare
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { same } from '../../src/map';

describe('Given Map compare function', (): void => {

    describe('Given a [same] function', () => {

        const chance: Chance.Chance = new Chance('map-compare-same');

        it('should be able to false not object', () => {

            const obj: Record<string, string> = {
                [chance.string()]: chance.string(),
            };

            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            expect(same(obj, undefined as any)).to.be.false;
        });

        it('should be able to false different length maps', () => {

            const first: Record<string, string> = {
                [chance.string()]: chance.string(),
            };
            const second: Record<string, string> = {
                ...first,
                [chance.string()]: chance.string(),
            };

            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            expect(same(first, second)).to.be.false;
        });

        it('should be able to false different maps', () => {

            const key: string = chance.string();

            const first: Record<string, string> = {
                [chance.string()]: chance.string(),
                [key]: chance.string(),
            };
            const second: Record<string, string> = {
                ...first,
                [key]: chance.string(),
            };

            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            expect(same(first, second)).to.be.false;
        });

        it('should be able to true same arrays', () => {

            const first: Record<string, string> = {
                [chance.string()]: chance.string(),
                [chance.string()]: chance.string(),
            };
            const second: Record<string, string> = {
                ...first,
            };

            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            expect(same(first, second)).to.be.true;
        });
    });
});
