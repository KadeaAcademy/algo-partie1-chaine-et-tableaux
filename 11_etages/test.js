const steps = require('./index');

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  console.log.mockRestore();
});

test('steps est une fonction', () => {
  expect(typeof steps).toEqual('function');
});

test('steps est appelé avec n = 1', () => {
  steps(1);
  expect(console.log.mock.calls[0][0]).toEqual('#');
  expect(console.log.mock.calls.length).toEqual(1);
});

test("steps est appelé avec  n = 2", () => {
  steps(2);
  expect(console.log.mock.calls[0][0]).toEqual("# ");
  expect(console.log.mock.calls[1][0]).toEqual("##");
  expect(console.log.mock.calls.length).toEqual(2);
});

test("steps est appelé avec  n = 3", () => {
  steps(3);
  expect(console.log.mock.calls[0][0]).toEqual("#  ");
  expect(console.log.mock.calls[1][0]).toEqual("## ");
  expect(console.log.mock.calls[2][0]).toEqual("###");
  expect(console.log.mock.calls.length).toEqual(3);
});
