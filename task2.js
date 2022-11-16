const arrText = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  "-": "minus",
};
function transform(array) {
  let arr = [];
  for (i = 0; i < array.length; i += 1) {
    let numberToString = array[i].toString(10);
    console.log(numberToString);
    if (numberToString.length > 1) {
      let numbers = [];
      for (let index = 0; index < numberToString.length; index += 1) {
        const element = numberToString[index];
        numbers.push(arrText[element]);
      }
      arr.push(numbers.join(","));
    } else {
      arr.push(arrText[numberToString]);
    }
  }
  return arr;
}

const arrNumber = [157, 2225, -89, -7002];
console.log(transform(arrNumber));
