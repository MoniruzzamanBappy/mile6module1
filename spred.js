const numbers = [23, 24, 241, 35, 345423, 12, 31312, 123, 12, 312, 3];
const max = Math.max(234, 23423, 4, 23423, 4234, 234, 23, 42, 3423423, 4, 234);

console.log(max);

const maxInArray = Math.max(...numbers);

console.log(maxInArray);

const newNumbers = numbers;
numbers.push(654);
console.log(newNumbers);

const newNumbers1 = [...numbers];
numbers.push(6542);
console.log(newNumbers1);