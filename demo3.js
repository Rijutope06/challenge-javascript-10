const matriz = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
];

console.log(matriz[0][2]);

const numbers = [];

matriz.forEach(array => {
  array.forEach(number => {
    numbers.push(number);
  })
});

const rta = matriz.reduce((arrayTotal, array) => {
  return [...arrayTotal, ...array];
}, []);

console.log(numbers);
console.log(rta);