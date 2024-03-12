/* 
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.

*/

function FirstReverse(str: string) {
  // code goes here
  return str.split("").reverse().join("").toString();
}

console.log(FirstReverse("Coderbyte")); // etybredoC
