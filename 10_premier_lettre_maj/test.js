const capitalize = require('./index');

test('vérifier que Capitalize est une fonction', () => {
  expect(typeof capitalize).toEqual('function');
});

test("mettre en majuscule toutes les premières lettre d'une phrase", () => {
  expect(capitalize('salut, comment allez-vous?')).toEqual(
    'Salut, Comment Allez-vous?'
  );
});

test('mettre en majuscule la première lettre', () => {
  expect(capitalize('je suis un commando de la force navale!!')).toEqual(
    'Je Suis Un Commando De La Force Navale!!'
  );
});
