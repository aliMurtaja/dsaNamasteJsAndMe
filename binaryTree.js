// 69. Sqrt(x)
function mySqrt() {
  const x = 25;

  if (x < 2) return x;

  let l = 2;
  let r = x / 2;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (x === m * m) {
      console.log(m);
      return m;
    } else {
      if (m * m > x) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
  }
  return r;
}
// console.log(mySqrt());

// 374. Guess Number Higher or Lower
function guessNumber() {
  const n = 10;

  let l = 0;
  let r = n;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (!guess(num)) {
      return num;
    } else if (guess(m) === -1) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
}
// console.log(guessNumber());

// 33. Search in Rotated Sorted Array
function search() {
  const arr = [4, 5, 6, 7, 0, 1, 2];
  const target = 7;

  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (arr[m] === target) {
      return m;
    }
    if (arr[l] < arr[m]) {
      if (target < arr[m] && target >= arr[l]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    } else {
      if (target > arr[m] && target <= arr[r]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
  }
  return -1;
}
// console.log(search());

// 278. First Bad Version // This is correct but it needs to be run on leetcode. it will not work here
var solution = function () {
  let n = 10;
  let bad = 4;

  let l = 0;
  let r = n;

  while (l < r) {
    const m = Math.floor((l + r) / 2);

    if (m !== bad) {
      console.log("p", m);
      l = m + 1;
    } else if (m === bad) {
      console.log("ko");
      r = m;
    }
  }
  return r;
};
// console.log(solution());

// 162. Find Peak Element
function findPeakElement() {
  const arr = [1, 2, 1, 3, 5, 6, 4];
  // const output = 5

  let l = 0;
  let r = arr.length - 1;

  // while (l <= r) { <-- will go infinite loop, comment-out console below to see reason
  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (arr[m] < arr[m + 1]) {
      l = m + 1;
    } else {
      r = m;
    }
    // console.log("lr", l, r, m);
  }
  return l;
}
// console.log(findPeakElement());

// 153. Find Minimum in Rotated Sorted Array
function findMin() {
  let arr = [3, 4, 5, 1, 2];

  let l = 0;
  let r = arr.length - 1;

  if (arr[l] < arr[r]) return arr[l];

  while (l <= r) {
    if (arr[l] < arr[r]) return arr[l];
    const m = Math.floor((l + r) / 2);
    if (arr[m] < arr[m - 1]) {
      return arr[m];
    } else if (arr[l] > arr[m]) {
      r = m - 1;
      // console.log("r", r);
    } else {
      l = m + 1;
      // console.log("l", l);
    }
  }
}
// console.log(findMin());

// Approach 1
// 34. Find First and Last Position of Element in Sorted Array
function searchRange() {
  const arr = [3, 4];
  const target = 3;
  let output = [-1, -1];
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (arr[m] < target) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  if (arr[r] === target) output[0] = r;

  l = 0;
  r = arr.length - 1;
  while (l < r) {
    const m = Math.ceil((l + r) / 2);
    // console.log(arr[m]);
    if (arr[m] > target) {
      r = m - 1;
    } else {
      l = m;
    }
  }
  if (arr[r] === target) output[1] = r;

  return output;
}
// console.log(searchRange());

// Approach 2
function searchRangeTwo() {
  const arr = [5, 7, 7, 8, 8, 10];
  const target = 8;

  let l = 0;
  let r = arr.length - 1;
  let output = [-1, -1];

  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (arr[m] < target) {
      l = m + 1;
    } else if (arr[m] > target) {
      r = m - 1;
    } else {
      output[0] = m;
      r = m - 1;
      console.log("r", r);
    }
    // if (r === l) break;
  }

  l = 0;
  r = arr.length - 1;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (arr[m] < target) {
      l = m + 1;
    } else if (arr[m] > target) {
      r = m - 1;
    } else {
      output[1] = m;
      // arr = [5, 7, 7, 8, 8, 10];
      // console.log("l", arr[m], target);
      l = m + 1;
      console.log("r", l);
    }
    // if (r === l) break;
  }
  return output;
}
// console.log(searchRangeTwo());

// 852. Peak Index in a Mountain Array
function peakIndexInMountainArray() {
  let arr = [0, 10, 5, 2];

  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (arr[m + 1] > arr[m]) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return l;
}
// console.log(peakIndexInMountainArray());

// 540. Single Element in a Sorted Array
function singleNonDuplicate() {
  const arr = [3, 3, 7, 7, 10, 11, 11];

  let l = 0;
  let r = arr.length - 1;
  // while 0 8
  // while 0 2
  // 253 --> while 2 2
  while (l <= r) {
    // console.log("while", l, r);
    const m = Math.floor((l + r) / 2);
    if (arr[m - 1] === arr[m]) {
      const leftCount = m - 1 - l;
      if (leftCount % 2 === 1) {
        r = m - 2;
      } else {
        l = m + 1;
      }
    } else if (arr[m + 1] === arr[m]) {
      const rightCount = m + 1 - r;
      if (rightCount % 2 === 1) {
        l = m + 2;
      } else {
        r = m - 1;
      }
    } else if (arr[m + 1] !== arr[m] && arr[m - 1] !== arr[m]) {
      return arr[m];
    }
  }
}
// console.log(singleNonDuplicate());
