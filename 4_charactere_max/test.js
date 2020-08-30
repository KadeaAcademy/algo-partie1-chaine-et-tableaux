const maxChar = require('./index');

test('la fonction maxChar existe', () => {
  expect(typeof maxChar).toEqual('function');
});
test('Trouver le caractère qui reviens le plus souvent', () => {
  expect(maxChar('a')).toEqual('a');
  expect(maxChar('abcdefghijklmnaaaaa')).toEqual('a');
});

test('Trouver le caractère qui reviens le plus souvent', () => {
  expect(maxChar('ab1c1d1e1f1g1')).toEqual('1');
});
