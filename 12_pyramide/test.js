const pyramid = require('./index');

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  console.log.mockRestore();
});

test('pyramid est une fonction', () => {
  expect(typeof pyramid).toEqual('function');
});

test('afficher la pyramide pour n = 2', () => {
  pyramid(2);
  expect(console.log.mock.calls[0][0]).toEqual(' # ');
  expect(console.log.mock.calls[1][0]).toEqual('###');
  expect(console.log.mock.calls.length).toEqual(2);
});

test("afficher la pyramide pour n = 3", () => {
  pyramid(3);
  expect(console.log.mock.calls[0][0]).toEqual("  #  ");
  expect(console.log.mock.calls[1][0]).toEqual(" ### ");
  expect(console.log.mock.calls[2][0]).toEqual("#####");
  expect(console.log.mock.calls.length).toEqual(3);
});

test("afficher la pyramide pour n = 4", () => {
  pyramid(4);
  expect(console.log.mock.calls[0][0]).toEqual("   #   ");
  expect(console.log.mock.calls[1][0]).toEqual("  ###  ");
  expect(console.log.mock.calls[2][0]).toEqual(" ##### ");
  expect(console.log.mock.calls[3][0]).toEqual("#######");
  expect(console.log.mock.calls.length).toEqual(4);
});
