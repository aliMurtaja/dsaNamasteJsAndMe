// 1. Two Sum
function twoSum() {
  let arr = [3, 3];
  let target = 6;
  const hashOfArr = {};
  for (let i = 0; i < arr.length; i++) {
    if (!hashOfArr[arr[i]]) {
      hashOfArr[arr[i]] = i;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    otherVal = target - arr[i];
    if (hashOfArr[otherVal]) return [hashOfArr[otherVal], i];
  }
  //   console.log(hashOfArr);
}
// console.log(twoSum());

// 167. Two Sum II - Input Array Is Sorted
function twoSumTwo() {
  let arr = [2, 3, 4];
  let target = 6;
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    const totalVal = arr[l] + arr[r];
    if (totalVal > target) {
      r = r - 1;
      //   console.log(l, r);
    } else if (totalVal < target) {
      l = l + 1;
    } else if (totalVal === target) {
      return [l + 1, r + 1]; //Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
    }
  }
}
// console.log(twoSumTwo());

// 392. Is Subsequence
function isSubsequence() {
  let s = "abce";
  let t = "ahbgdc";

  let iS = 0;
  let jT = 0;

  while (iS <= s.length - 1 && t[jT]) {
    console.log(s[iS], t[jT]);
    if (s[iS] === t[jT]) {
      ++iS;
      ++jT;
    } else {
      ++jT;
    }
  }

  if (iS > s.length - 1) {
    return true;
  }
  return false;
}
// console.log(isSubsequence());

// 28. Find the Index of the First Occurrence in a String
function strStr() {
  let haystack = "sapbutsad";
  let needle = "sad";

  for (
    let i = 0;
    i < haystack.length - (needle.length - 1);
    i = i + needle.length
  ) {
    // let j = needle.length - 1;
    let j = 0;
    let k = i;

    // console.log(j, k);
    while (j < needle.length) {
      // console.log(haystack[k], needle[j]);
      if (haystack[k] !== needle[j]) {
        break;
      }
      ++j;
      ++k;
    }
    // console.log(j);
    if (j === needle.length) return i;
  }
  return -1;
}
// console.log(strStr());
