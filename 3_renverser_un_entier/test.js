const reverseInt = require('./index');

test('La fonction ReverseInt existe', () => {
  expect(reverseInt).toBeDefined();
});

test('ReverseInt avec comme input 0', () => {
  expect(reverseInt(0)).toEqual(0);
});

test('ReverseInt renverse un nombre positif', () => {
  expect(reverseInt(5)).toEqual(5);
  expect(reverseInt(15)).toEqual(51);
  expect(reverseInt(90)).toEqual(9);
  expect(reverseInt(2359)).toEqual(9532);
});

test('ReverseInt renverse un nombre négatif', () => {
  expect(reverseInt(-5)).toEqual(-5);
  expect(reverseInt(-15)).toEqual(-51);
  expect(reverseInt(-90)).toEqual(-9);
  expect(reverseInt(-2359)).toEqual(-9532);
});
