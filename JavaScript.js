const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentNumber) => {
  return accumulator + currentNumber;
}, 0);

console.log(sum);
