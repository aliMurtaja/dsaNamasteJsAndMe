// 58. Length of Last Word(bad approach)
function lengthOfLastWordBad() {
  let s = "   fly me   to   the moon  ";
  let convertedInArry = s.trim().split(" ");
  return convertedInArry[convertedInArry.length - 1].length;
}
// console.log(lengthOfLastWordBad());

// 58. Length of Last Word(good approach)
function lengthOfLastWord() {
  let s = "   fly me   to   the moon  ";
  //   let s = " ";
  let Length = s.length;
  let count = 0;

  for (let i = Length - 1; i >= 0; i--) {
    if (count > 0 && s[i] === " ") {
      break;
    }
    if (s[i] === " ") {
      continue;
    }
    count++;
  }
  return count;
}
// console.log(lengthOfLastWord());

// 2942. Find Words Containing Character
function findWordsContaining() {
  let words = ["abc", "bcd", "aaaa", "cbc"];
  let x = "z";
  let output = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === x) {
        output.push(i);
        break;
      }
    }
  }
  return output;
}
// console.log(findWordsContaining());

// 771. Jewels and Stones
function numJewelsInStones() {
  let jewels = "aA";
  let stones = "aAAbbbb";

  let jewelsSet = new Set();
  for (let i = 0; i < jewels.length; i++) {
    if (!jewelsSet.has(jewels[i])) {
      jewelsSet.add(jewels[i]);
    }
  }
  // console.log(jewelsSet);
  let jewelsCount = 0;

  for (let i = 0; i < stones.length; i++) {
    if (jewelsSet.has(stones[i])) {
      jewelsCount++;
    }
  }
  return jewelsCount;
}
// console.log(numJewelsInStones());

// 3541. Find Most Frequent Vowel and Consonant
function maxFreqSum() {
  let s = "successes";
  let sHashTable = {};

  for (let i = 0; i < s.length; i++) {
    if (sHashTable[s[i]]) {
      sHashTable[s[i]] = ++sHashTable[s[i]];
    } else {
      sHashTable[s[i]] = 1;
    }
  }
  // console.log(sHashTable);

  let maxVowel = 0;
  let maxOther = 0;
  let vowel = ["a", "e", "i", "o", "u"];
  // successes"
  for (let i = 0; i < s.length; i++) {
    if (vowel.includes(s[i])) {
      maxVowel = Math.max(maxVowel, sHashTable[s[i]]);
    } else {
      maxOther = Math.max(maxVowel, sHashTable[s[i]]);
    }
  }
  // console.log(maxVowel, maxOther);
  return maxVowel + maxOther;
}
// console.log(maxFreqSum());

// 1221. Split a String in Balanced Strings
function balancedStringSplit() {
  let s = "RLRRLLRLRL";
  // Output: 4
  // Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

  let Lcount = 0;
  let Rcount = 0;
  let maxNumBalStr = 0;
  for (let i = 0; i < s.length; i++) {
    if (Rcount === Lcount) {
      ++maxNumBalStr;
    }
    if (s[i] === "R") {
      ++Rcount;
    } else {
      ++Lcount;
    }
  }
  //   console.log(maxNumBalStr);
  return maxNumBalStr;
}
// console.log(balancedStringSplit());

// 541. Reverse String II
function reverseStr() {
  let s = "abcdefghijklmnopqr";
  let k = 2;
  //"a b c d  e f g h  i j k l  m n o p  q r";

  for (let i = 0; i < s.length; i = i + 2 * k) {
    console.log(s[i]);

    // for (let j = 0; j < array.length; j++) {
    //   const element = array[j];
    // }
  }
}
// console.log(reverseStr());

// 125. Valid Palindrome
function isPalindrome() {
  let s = "A man, a plan, a canal: Panama";
  s = s.toLowerCase();
  let addToRight = "";
  let addToLeft = "";
  for (let i = 0; i < s.length; i++) {
    if (/^[A-Za-z]+$/.test(s[i])) {
      addToRight = addToRight + s[i];
      addToLeft = s[i] + addToLeft;
    }
  }
  console.log(addToLeft, addToRight);
  return addToLeft === addToRight;
}
// console.log(isPalindrome());

// 125. Valid Palindrome
function isPalindromeWithTwoPointer() {
  let s = "A man, a plan, a canal: Panama";
  s = s.toLowerCase();

  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (!/^[A-Za-z]+$/.test(s[i])) {
      ++i;
      continue;
    } else if (!/^[A-Za-z]+$/.test(s[j])) {
      --j;
      continue;
    } else if (s[i] !== s[j]) {
      return false;
    }
    ++i;
    --j;
  }
  return true;

  // for (let i = 0; i < Math.ceil(s.length / 2); i++) {
  //   if (/^[A-Za-z]+$/.test(s[i])) {
  //     console.log(s[i], s[s.length - i - 1]);
  //     // if (s[i] !== s[length - i - 1]) {
  //     //   return false;
  //     // }
  //   }
  // }
  // return true;
}
// console.log(isPalindromeWithTwoPointer());

// 1903. Largest Odd Number in String
function largestOddNumber() {
  let num = "35427246";
  let largestOdd = "";
  while (num) {
    if (parseInt(num) % 2 !== 0) {
      console.log(num);
      return String(num);
    }
    num = Math.floor(parseInt(num) / 10);
  }
  return largestOdd;
}
// console.log(largestOddNumber());

function largestOddNumberNamaste() {
  let num = "35427246";
  let i = num.length - 1;
  while (i >= 0) {
    if (Number(num[i]) % 2 === 1) {
      return num.substring(0, i + 1);
    }
    --i;
  }
  return "";
}
// console.log(largestOddNumberNamaste());

// 14. Longest Common Prefix
function longestCommonPrefix() {
  let strs = ["flower", "flow", "flight"];

  let i = 0;
  while (i < strs[0].length) {
    let firstWordChar = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (
        firstWordChar !== strs[j][i] ||
        i === strs[j].length // <-- I didn't get it
      ) {
        return strs[0].substring(0, i);
      }
    }
    ++i;
  }
}
// console.log(longestCommonPrefix());

// 242. Valid Anagram
function isAnagram() {
  let s = "anagramrr";
  let t = "nagaramaa";
  if (s.length !== t.length) return false;

  let tHasTable = {};
  for (let i = 0; i < t.length; i++) {
    if (!tHasTable[t[i]]) {
      tHasTable[t[i]] = 1;
    } else {
      tHasTable[t[i]] = ++tHasTable[t[i]];
    }
  }
  for (let j = 0; j < s.length; j++) {
    if (!tHasTable[s[j]] || tHasTable[s[j]] < 0) {
      return false;
    }
    --tHasTable[s[j]];
  }
  return true;
}
console.log(isAnagram());
