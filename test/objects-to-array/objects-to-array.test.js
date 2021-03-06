import objectToArray from '../../src/favorites/object-to-array.js';

const test = QUnit.test;

QUnit.module('OBJECTS TO ARRAY');

test('turn objects to array function', assert => {
    // arrange
    const expected = [
        {
            name: 'name',
            id: 'id'
        },
        {
            name: 'nom',
            id: '1234'
        },
        {
            name: 'hans',
            id: '345'
        }
    ];
    const object = {
        name: {
            name: 'name',
            id: 'id'
        },
        nom: {
            name: 'nom',
            id: '1234'
        },
        hans: {
            name: 'hans',
            id: '345'
        }
    };

    // act
    const result = objectToArray(object);
    // assert
    assert.deepEqual(result, expected);
});