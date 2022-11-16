// TASK 1
const arr = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
function transform(num) {
  if (num == 0) return "zero";
  else return arr[num % 10];
}
const arrNumber = [0, 1, 6];
for (let i = 0; i < arrNumber.length; i += 1)
  console.log(Array(transform(arrNumber[i])));
