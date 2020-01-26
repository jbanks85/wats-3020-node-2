/*
Description:a program that counts from 1 to a given integer, printing out fizz if the number is divisble by 3, buzz if it is divisible by 5, and fizzbuzz if it is divisible by both 3 and 5.
Input: fizzbuzz
Output: integer
Usage: node 1-fizzbuzz <integer>
*/

// get input using getargs
const getargs = require("../modules/getargs")
let input = getargs.getIntegerArg()


function fizzbuzz(n) {
  if (n % 15 == 0) {
    return `fizzbuzz`;
  } else if (n % 3 == 0) {
    return `fizz`;
  } else if (n % 5 == 0) {
    return `buzz`;
  } else {
    return ``
  }
}

if (isNaN(input) || !Number.isInteger(input)) {
  console.log("usage: node 1-fizzbuzz <integer>");
}
else {
  for (let i = 1; i <= input; i++) {
    console.log(`${i} ${fizzbuzz(i)}`);
  }
}


