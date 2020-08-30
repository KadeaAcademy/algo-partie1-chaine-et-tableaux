const rotateLeft = require('./index');

test('verifier si la fonction rotateLeft est définie', () => {
  expect(typeof rotateLeft).toEqual('function');
});

test("2 rotation à gauche d'un tableau de 5 elements", () => {
  const arr = [1, 2, 3, 4, 5];
  const rotated = rotateLeft(arr, 2);

  expect(rotated).toEqual([3, 4, 5, 1, 2]);
});

test("4 rotation à gauche d'un tableau de 5 elements", () => {
  const arr = [1, 2, 3, 4, 5];
  const rotated = rotateLeft(arr, 4);

  expect(rotated).toEqual([5, 1, 2, 3, 4]);
});

test("5 rotation à gauche d'un tableau de 5 elements", () => {
  const arr = [1, 2, 3, 4, 5];
  const rotated = rotateLeft(arr, 5);

  expect(rotated).toEqual([1, 2, 3, 4, 5]);
});
