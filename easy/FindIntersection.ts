/*
  Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
*/

function FindIntersection(strArr: string[]) {
  const str0 = strArr[0].split(",").map((i) => parseInt(i));
  const str1 = strArr[1].split(",").map((i) => parseInt(i));
  const l0 = str0.length >= str1.length ? str0.length : str1.length;
  const res = [];

  for (let i = 0; i < (l0 ? str0.length : str1.length); i++) {
    if (l0) {
      if (str1.includes(str0[i])) res.push(str0[i]);
    } else if (str0.includes(str1[i])) res.push(str1[i]);
  }
  return res.length ? res.toString() : false;
}

// keep this function call here
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"])); // 1, 4, 13
