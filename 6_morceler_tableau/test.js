const chunk = require('./index');

test('verifier si la fonction chunk est définie', () => {
  expect(typeof chunk).toEqual('function');
});

test('diviser un tableau de 10 element en 5 morceau/tabeaux de 2 elements', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const chunked = chunk(arr, 2);

  expect(chunked).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
  ]);
});

test('diviser un tableau de 3 element en 3 morceau/tabeaux de 1 element', () => {
  const arr = [1, 2, 3];
  const chunked = chunk(arr, 1);

  expect(chunked).toEqual([[1], [2], [3]]);
});

test('diviser un tableau de 5 element en morceau/tabeaux de 3 elements', () => {
  const arr = [1, 2, 3, 4, 5];
  const chunked = chunk(arr, 3);

  expect(chunked).toEqual([
    [1, 2, 3],
    [4, 5],
  ]);
});

test('diviser un tableau de 13 element en  morceau/tabeaux de 5 elements', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const chunked = chunk(arr, 5);

  expect(chunked).toEqual([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13],
  ]);
});
