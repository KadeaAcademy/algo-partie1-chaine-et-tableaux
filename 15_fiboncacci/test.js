const fibo = require("./index");

test("fibo est une fonction", () => {
  expect(typeof fibo).toEqual("function");
});

test("calculer la valeur correct pour n = 1", () => {
  expect(fibo(1)).toEqual(1);
});

test("calculer la valeur correct pour n = 1", () => {
  expect(fibo(2)).toEqual(1);
});

test("calculer la valeur correct pour n = 1", () => {
  expect(fibo(3)).toEqual(2);
});

test("calculer la valeur correct pour n = 1", () => {
  expect(fibo(4)).toEqual(3);
});

test("calculer la valeur correct pour n = 1", () => {
  expect(fibo(39)).toEqual(63245986);
});
