/* 
Min Window Substring
Have the function MinWindowSubstring(strArr) take the array of strings stored in strArr, which will contain only two strings,

the first parameter being the string N and the second parameter being a string K of some characters, and your goal is to determine the smallest substring of N that contains all the characters in K.

For example: if strArr is ["aaabaaddae", "aed"] then the smallest substring of N that contains the characters a, e, and d is "dae" located at the end of the string. So for this example your program should return the string dae.

Another example: if strArr is ["aabdccdbcacd", "aad"] then the smallest substring of N that contains all of the characters in K is "aabd" which is located at the beginning of the string.

Both parameters will be strings ranging in length from 1 to 50 characters and all of K's characters will exist somewhere in the string N. Both strings will only contains lowercase alphabetic characters.

Examples
Input: ["ahffaksfajeeubsne", "jefaa"]
Output: aksfaje

Input: ["aaffhkksemckelloe", "fhea"]
Output: affhkkse
*/
interface CharCount {
  [key: string]: number;
}

export default function MinWindowSubstring(strArr: string[]) {
  let [N, K] = strArr;
  let result = "",
    count = K.length,
    left = 0,
    exit = false;

  // create an index map
  const charCount: CharCount = {};

  // fill the index map
  for (let i = 0; i < K.length; i++)
    charCount[K[i]] = (charCount[K[i]] || 0) + 1;

  for (let right = 0; right < N.length; right++) {
    const rightWord = N[right];

    if (charCount[rightWord] > 0) count--;
    charCount[rightWord]--;

    while (count === 0) {
      const leftWord = N[left];
      charCount[leftWord]++;
      result = N.slice(left, right + 1);
      left++;
      if (charCount[leftWord] > 0) count++;
      exit = true;
    }
    if (exit) return result;
  }
}

// Examples
console.log(MinWindowSubstring(["aaabaaddae", "aed"])); // Output: dae
console.log(MinWindowSubstring(["aabdccdbcacd", "aad"])); // Output: aabd
console.log(MinWindowSubstring(["ahffaksfajeeubsne", "jefaa"])); // Output: aksfaje
console.log(MinWindowSubstring(["aaffhkksemckelloe", "fhea"])); // Output: affhkkse
