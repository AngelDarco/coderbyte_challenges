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
function MinWindowSubstring(strArr: string[]) {
  const [N, K] = strArr;
  let result = "";

  // Create a frequency map for characters in K
  const charCount = {
    [K[0]]: 1,
    [K[1]]: 1,
    [K[2]]: 1,
  };

  for (const char of K) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let left = 0;
  let minLength = Infinity;
  let count = K.length;

  // Sliding window
  for (let right = 0; right < N.length; right++) {
    const rightChar = N[right];

    if (charCount[rightChar] > 0) {
      count--;
    }

    charCount[rightChar]--;

    // Check if all characters in K are found
    while (count === 0) {
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        result = N.substring(left, right + 1);
      }

      const leftChar = N[left];
      charCount[leftChar]++;

      if (charCount[leftChar] > 0) {
        count++;
      }

      left++;
    }
  }

  return result;
}

// Examples
console.log(MinWindowSubstring(["aaabaaddae", "aed"])); // Output: dae
console.log(MinWindowSubstring(["aabdccdbcacd", "aad"])); // Output: aabd
console.log(MinWindowSubstring(["ahffaksfajeeubsne", "jefaa"])); // Output: aksfaje
console.log(MinWindowSubstring(["aaffhkksemckelloe", "fhea"])); // Output: affhkkse

console.log("res: ", MinWindowSubstring(["ahffaksfajeeubsne", "jefaa"])); // aksfaje
