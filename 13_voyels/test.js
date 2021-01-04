const vowels = require("./index");

test("Vowels est une fonction", () => {
  expect(typeof vowels).toEqual("function");
});

test("retourne le nombre des voyels utilisées", () => {
  expect(vowels("aeiou")).toEqual(5);
});

test("retourne le nombre des voyels utilisées même quand elles sont en majucules", () => {
  expect(vowels("AEIOU")).toEqual(5);
});

test("retourne le nombre des voyels utilisées", () => {
  expect(vowels("abcdefghijklmnopqrstuvwxyz")).toEqual(5);
});

test("retourne le nombre des voyels utilisées", () => {
  expect(vowels("bcdfghjkl")).toEqual(0);
});
