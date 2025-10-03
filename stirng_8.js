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
