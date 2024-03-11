/* 
Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.
*/

function FirstFactorial(num: number) {
  function factorial(num: number, desc: number) {
    if (desc === 1) return num;
    desc--;
    num = factorial(num, desc);
    return num * desc;
  }

  return factorial(num, num);
}

// keep this function call here
// @ts-ignore
console.log(FirstFactorial(20)); // 2432902008176640000
console.log(FirstFactorial(10)); // 3628800
console.log(FirstFactorial(1)); // 1
