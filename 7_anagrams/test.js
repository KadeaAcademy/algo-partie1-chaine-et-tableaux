const anagrams = require('./index.js');

test("vérifier l'existence de la fonction anagrams", () => {
  expect(typeof anagrams).toEqual('function');
});

test('"mbote" est un anagrame de "tembo"', () => {
  expect(anagrams('mbote', 'tembo')).toBeTruthy();
});

test('"Whoa! Hi!" est un anagrame de "Hi! Whoa!"', () => {
  expect(anagrams('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
});

test('"Moko mibale" nest pas un anagrame de "mbili mibale"', () => {
  expect(anagrams('Moko mibale', 'mbili mibale')).toBeFalsy();
});

test('"madesu" n\'est pas un agrame "madessu"', () => {
  expect(anagrams('madesu', 'madessu')).toBeFalsy();
});

test('"Un jour a la kda" is not an anagram of "un jour la kdacademy"', () => {
  expect(anagrams('un jour a la kda', 'un jour la kdacademy')).toBeFalsy();
});
