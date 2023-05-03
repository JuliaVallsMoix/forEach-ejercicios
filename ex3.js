/**
 * Completa el cuerpo de la función del forEach para que SOLAMENTE incluya en el array aquellos números que son mayores de 2
 */

const numbers = [1, 2, 3, 4, 5];
let filteredNumbers = [];
numbers.forEach((number) => {
// completar
filteredNumbers = numbers.filter((number) => number > 2);
});
console.log(filteredNumbers); // Output: [3, 4, 5]