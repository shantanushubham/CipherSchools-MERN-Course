const addNumbers = (...args) => {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
};

console.log(addNumbers(10, 14, 16, 22, 1, 45));
