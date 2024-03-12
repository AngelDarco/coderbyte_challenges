/* 
Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.
*/
export default function QuestionsMarks(str: string) {
  const strArr = [];
  const res = [];
  let result = true;

  let counter = "";
  let word = "";
  const strCuted = str.match(/\d.*\d/)?.[0] || "";

  for (let i = 0; i < strCuted.length; i++) {
    word += strCuted[i];
    if (!isNaN(+strCuted[i]) && i > 0) {
      strArr.push(word);
      word = "";
      word += strCuted[i];
    }
  }

  for (let i = 0; i < strArr.length; i++) {
    const init = +strArr[i][0];
    const end = +strArr[i][strArr[i].length - 1];

    for (let ii = 1; ii < strArr[i].length - 1; ii++) {
      const symbol = strArr[i][ii] === "?";
      if (init + end === 10 && symbol) {
        counter += strArr[i][ii];
      }
    }
    if (counter.length !== 0) res.push(counter);
    counter = "";
  }

  res.forEach((x) => {
    if (x.length !== 3) {
      result = false;
      return;
    }
  });
  return res.length === 0 ? false : result;
}
// keep this function call here
console.log(QuestionsMarks("acc?7??sss?3rr1??????5")); // true
console.log(QuestionsMarks("9???1???9???1???9")); // true
console.log(QuestionsMarks("9???1???9??1???9")); // false
console.log(QuestionsMarks("5??aaaaaaaaaaaaaaaaaaa?5?5")); // false
console.log(QuestionsMarks("aa6?9")); // false
