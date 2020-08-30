const palindrome = require('./index');

test('la fonction palindrome est définie', () => {
  expect(typeof palindrome).toEqual('function');
});

test('"aba" est un palindrome', () => {
  expect(palindrome('aba')).toBeTruthy();
});

test('" aba" n\'est pas un palindrome', () => {
  expect(palindrome(' aba')).toBeFalsy();
});

test('"aba " n\'est pas un palindrome', () => {
  expect(palindrome('aba ')).toBeFalsy();
});

test('"salutations" n\'est pas un palindrome', () => {
  expect(palindrome('salutations')).toBeFalsy();
});

test('"1000000001" est un palindrome', () => {
  expect(palindrome('1000000001')).toBeTruthy();
});

test('"Fish hsif" n\'est pas un palindrome', () => {
  expect(palindrome('Fish hsif')).toBeFalsy();
});

test('"pennep" est un palindrome', () => {
  expect(palindrome('pennep')).toBeTruthy();
});
