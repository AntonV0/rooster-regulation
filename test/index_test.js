const assert = require('assert');
const Rooster = require('../index')

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooseter call', () => {
    // setup
    const expected = 'moo!'
    // exercise
    const actual = Rooster.announceDawn();
    // verify
    assert.equal(actual, expected);
    // teardown not needed here
    });
  });
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
    // setup
    const inputNumber = 12;
    const expected = '12';
    // exercice
    const actual = Rooster.timeAtDawn(inputNumber);
    // verify
    assert.strictEqual(actual, expected);
    // teardown not required
    });

    it('throws a Range Error if passed a number less than 0', () => {
    // setup
    const inputNumber = -1;
    const expected = RangeError;
    // verify
    assert.throws(() => {
      Rooster.timeAtDawn(inputNumber); // exercise
      }, expected);
    })

    it('throws a Range Error if passed a number greater than 23', () => {
    // setup
    const inputNumber = 24;
    const expected = RangeError;
    // verify
    assert.throws(() => {
      Rooster.timeAtDawn(inputNumber); // exercise
      }, expected);
    });
  });
});

/* npm test output:
  Rooster
    .announceDawn
      ✔ returns a rooseter call
    .timeAtDawn
      ✔ returns its argument as a string
      ✔ throws a Range Error if passed a number less than 0
      ✔ throws a Range Error if passed a number greater than 23


  4 passing (6ms) 
*/