const test = require('tape');
const Recipe = require('../recipe');

test('Recipe#hydrate()', async (t) => {
    const r = new Recipe(42);
    await r.hydrate();
    t.equal(r.name, 'Recipe: #42', 'name equality');
});

test('Recipe#serialize()', async (t) => {
    const r = new Recipe(17);
    const rObj = {
        id: r.id,
        name: r.name
    };
    t.deepEquals(rObj, { id: 17, name: null }, 'serializes properly');
    t.end();
});