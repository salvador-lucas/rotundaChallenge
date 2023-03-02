import { describe, expect, test } from '@jest/globals';
import { Lion, Tiger } from '../zooAnimals/animals';

describe('animal phrases. Success cases: ', () => {
  test('animals speaks: it should be ok', () => {
    const lion = new Lion('Rudolph the lion');
    expect(lion).toBeDefined();
    const lionSpeak = lion.speak('I\'m a lion');
    expect(lionSpeak).toBeDefined();
    expect(lionSpeak).toBe('I\'m roar a roar lion roar');

    const tiger = new Tiger('Samid the tiger');
    expect(tiger).toBeDefined();
    const tigerSpeak = tiger.speak('Lions rules');
    expect(tigerSpeak).toBeDefined();
    expect(tigerSpeak).toBe('Lions grrr rules grrr');

  });

});
