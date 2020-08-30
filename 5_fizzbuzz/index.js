// --- Directions
// Ecrire un programme qui affiche via console logs des
// nombre allant de 1 to n passé en paramètre.
// Pour les nombres multiples de 3 afficher "fizz"
// Et pour les nombres multiples de 5 afficher buzz
// Si le nombre est à la fois multiple de 3 et de 5 afficher fizzbuzz
//Dans le cas contraire, afficher juste le nombre
// --- Exemple
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz
// Comme vous l'avez constaté, au lieu d'avoir 3, il y a eu "fizz"
// parce que 3 un multiple de 3
// Au lieu d'avoir 5, il y a eu "buzz",parce que 5 est un multipl de 5
// Mais vu que 1,2 et 4 ne sont ni multiple de 3 ou 5 , c'est pourquoi
// On les affiche simplement sans que ca ne soit "fizz" ou "buzz"
// à la place
// Si on était allé jusqu'à 15,l'affichage allait être fizzbuzz,
// parce que 15 est multiple de 3 et de 5 à la fois.
// Pour savoir qu'un nombre est multiple d'un autres on
// l'operateur modulo.
// Par exemple:
// 7 % 5 : Veut dire le reste de la division entière ce 7 par 5,
// vu que la valeur sera !== 0 alors 7 n'est pas multiple de 5
// 15 % 5 === 0 : Si la reponse est 0 alors, 15 est multiple car
// Le reste de la division entière de 15 par 5 donne 0.

function fizzBuzz(n) {}

module.exports = fizzBuzz;
