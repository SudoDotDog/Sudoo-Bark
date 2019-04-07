/**
 * @author WMXPY
 * @namespace Url
 * @description Structure
 */

export const getProtocol = (url: string): string | null => {

    const splited: string[] = url.split('://');

    if (splited.length !== 2) {
        return null;
    }

    return splited[0];
};
