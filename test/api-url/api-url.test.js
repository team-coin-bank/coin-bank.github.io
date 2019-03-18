import { makeCharacterUrl } from '../../src/api-url/api-url.js';

const test = QUnit.test;

QUnit.module('API URL');

test('make character search URL', assert => {
    // arrange
    const queryOptions = {
        name: 'squirrel'
    };
    const expected = 'https://gateway.marvel.com/v1/public/characters?nameStartsWith=squirrel&apikey=23d38bd86abd4d9b4c8a0605bf740b2a';
    // act
    const result = makeCharacterUrl(queryOptions);
    // assert
    assert.equal(result, expected);
});