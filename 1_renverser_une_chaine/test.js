const reverse = require('./index');

test('Verifier si la fonction reverse est définie', () => {
  expect(reverse).toBeDefined();
});

test('Renverser une chaine des caractère', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Renverser une chaine des caractère', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});
