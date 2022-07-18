// Create a function sum which accepts any amount of numbers and return the sum of their addition

const sum = (...sumOfParameters) => {
    let sum = 0;
    for(let i = 0; i < sumOfParameters.length; i++){
        sum += sumOfParameters[i];
    } return sum
};

console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70
console.log(sum(22, 35, -15, 42));
