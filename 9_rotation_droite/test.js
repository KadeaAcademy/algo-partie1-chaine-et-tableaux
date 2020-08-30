// rotateRight([1,2,3,4,5],1) => [5,1,2,3,4]
// rotateRight([1,2,3,4,5],2) => [4,5,1,2,3,4]
// rotateRight([1,2,3,4,5],3) => [3,4,5,1,2]
// rotateRight([1,2,3,4,5],4) => [2,3,4,5,1]
const rotateRight = require('./index');

test('verifier si la fonction rotateRight est définie', () => {
  expect(typeof rotateRight).toEqual('function');
});

test("2 rotation à droite d'un tableau de 5 elements", () => {
  const arr = [1, 2, 3, 4, 5];
  const rotated = rotateRight(arr, 2);

  expect(rotated).toEqual([4, 5, 1, 2, 3]);
});

test("4 rotation à droite d'un tableau de 5 elements", () => {
  const arr = [1, 2, 3, 4, 5];
  const rotated = rotateRight(arr, 4);

  expect(rotated).toEqual([2, 3, 4, 5, 1]);
});

test("5 rotation à droite d'un tableau de 5 elements", () => {
  const arr = [1, 2, 3, 4, 5];
  const rotated = rotateRight(arr, 5);

  expect(rotated).toEqual([1, 2, 3, 4, 5]);
});
