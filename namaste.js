function findSecondLargestNumber(arr) {
  let firstLarge = arr[0];
  let secondLarge = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLarge) firstLarge = arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLarge) {
      if (firstLarge === arr[i]) continue;
      secondLarge = arr[i];
    }
  }
  return secondLarge;
}
// console.log(findSecondLargestNumber([2, 5, 12, 25, 19, 11, 40, 9, 29]));

function findSecondLargestNumberTwoNamaste(arr) {
  //   let firstLarge = arr[0];
  //   let secondLarge = arr[0];
  let firstLarge = -Infinity;
  let secondLarge = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (firstLarge < arr[i]) {
      secondLarge = firstLarge;
      firstLarge = arr[i];
    } else if (secondLarge < arr[i]) {
      if (arr[i] === firstLarge) continue; // In case of two same max number
      secondLarge = arr[i];
    }
  }
  return secondLarge;
}
// console.log(findSecondLargestNumberTwoNamaste([2, 5, 12, 25, 25, 20]));
// console.log(findSecondLargestNumberTwoNamaste([2, 5, 12, 25, 19, 11, 40, 9, 29]));

function countDigits(arr) {
  let digits = arr;
  let count = 0;
  if (digits === 0) {
    return 1;
  }
  while (digits) {
    digits = Math.floor(digits / 10);
    count++;
    console.log(digits, count);
  }
  // console.log(typeof digits, digits);
  return count;
}
// console.log(countDigits(251225191140929));

function countDigitsNamaste(arr) {
  let digits = Math.abs(arr); // To make number positive if it is negetive
  let count = 0;
  if (digits === 0) {
    return 1;
  }
  while (digits) {
    digits = Math.floor(digits / 10);
    count++;
  }
  return count;
}
// console.log(countDigitsNamaste(251225191140929));

// 9. Palindrome Number
function checkPolindromNumber(argDigits) {
  // 121 === 121
  let digits = Math.abs(argDigits); // To make number positive if it is negetive
  let reverseNum = 0;

  while (digits) {
    if (reverseNum === 0) {
      reverseNum = String(digits % 10);
    } else {
      reverseNum = reverseNum + String(digits % 10);
      // 1 => 1
      // 1 + 2 => 12
      // 1 + 1 => 121
    }
    digits = Math.floor(digits / 10);
  }
  return reverseNum === String(argDigits);
}
// console.log(checkPolindromNumber(121));

function checkPolindromNumberNamaste(argDigits) {
  if (argDigits < 0) return false;
  let xCopy = argDigits;
  let rev = 0;
  while (argDigits > 0) {
    let rem = argDigits % 10;
    rev = rev * 10 + rem;
    argDigits = Math.floor(argDigits / 10);
  }
  return rev === xCopy;
}
// console.log(checkPolindromNumberNamaste(121)); // true

// 7. Reverse Integer
function reverseIntiger(arr) {
  let min = -Math.pow(2, 31);
  let max = Math.pow(2, 31) - 1;

  // 121 === 121
  let digits = Math.abs(arr); // To make number positive if it is negetive
  let reverseNum = 0;

  while (digits) {
    reverseNum = 10 * reverseNum + (digits % 10);
    digits = Math.floor(digits / 10);
  }

  if (arr <= min || arr >= max) return 0;
  return arr < 0 ? -reverseNum : reverseNum;
}

function reverseIntigerNamaste(x) {
  let xCopy = x;
  x = Math.abs(x);
  let rev = 0;
  while (x > 0) {
    let last = x % 10;
    rev = rev * 10 + last;
    x = Math.floor(x / 10);
  }
  if (rev > 2 ** 31 - 1) return 0;
  return xCopy < 0 ? -rev : rev;
}
// console.log(reverseIntigerNamaste(123)); // 321

// --------------------------- 4

// 26. Remove Duplicates from Sorted Array
// wrong no need to visit
function removeDublicateFromSortedArrBrutForce(arr) {
  let uniqueEleArr = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    let isFindUniqeValue = false;
    let value = 0;
    for (let j = 0; j < uniqueEleArr.length; j++) {
      if (arr[i] !== uniqueEleArr[j]) {
        console.log("hello 3>>", arr[i], uniqueEleArr[j]);
        isFindUniqeValue = true;
        value = arr[i];
        // console.log(",,,", arr[i], j, uniqueEleArr);
      }
    }
    if (isFindUniqeValue) uniqueEleArr.push(value);
    console.log("hello 2>>", uniqueEleArr);
    // if (i === 3) break;
  }
  // console.log(",,,", uniqueEleArr);
  // arr = uniqueEleArr;
  // return arr;
}
// console.log(
//   removeDublicateFromSortedArrBrutForce([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
// );

// wrong no need to visit
function removeDublicateFromSortedArrByMeTwo(arr) {
  // [0,0,1,1,1,2,2,3,3,4];
  // [0,0,1,1,1,2,2,3,3,4];
  // [0,1,1,1,1,2,2,3,3,4];
  // [0,1,2,1,1,2,2,3,3,4];
  // [0,1,2,3,1,2,2,3,3,4];
  // [0,1,2,3,4,2,2,3,3,4];
  let currentPointedEle = 0;

  for (let i = 0; i < arr.length; i++) {
    uniqueEle = arr[i];
    if (arr[currentPointedEle] < arr[i]) {
      currentPointedEle++;
      arr[currentPointedEle] = arr[i];
    } else {
      continue;
    }
  }
  return arr;
}
// console.log(
//   removeDublicateFromSortedArrByMeTwo([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
// );

function removeDuplicatesNamaste(nums) {
  // [0, 0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4] given arry
  // [0, 1, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4] 5th iteration
  // [0, 1, 2, 0, 1, 1, 1, 2, 2, 3, 3, 4] 8th iteration
  // [0, 1, 2, 3, 1, 1, 1, 2, 2, 3, 3, 4] 10th iteration
  // [0, 1, 2, 3, 4, 1, 1, 2, 2, 3, 3, 4] 12th iteration
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    console.log(x, i, nums[x], nums[i]);
    if (nums[i] > nums[x]) {
      x++;
      nums[x] = nums[i];
    }
  }
  return nums;
}
// console.log(removeDuplicatesNamaste([0, 0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// 27. Remove Element
function removeElementByMe(arr, val) {
  // hello 1 >> 0 0 (8) [0, 1, 2, 2, 3, 0, 4, 2]
  // hello 1 >> 1 1 (8) [0, 1, 2, 2, 3, 0, 4, 2]
  // hello 1 >> 2 2 (8) [0, 1, 2, 2, 3, 0, 4, 2]
  // hello >> 2 2 (7) [0, 1, 2, 3, 0, 4, 2]
  // hello 1 >> 2 2 (7) [0, 1, 2, 3, 0, 4, 2]
  // hello >> 3 2 (6) [0, 1, 3, 0, 4, 2]
  // hello 1 >> 3 2 (6) [0, 1, 3, 0, 4, 2]
  // hello 1 >> 0 3 (6) [0, 1, 3, 0, 4, 2]
  // hello 1 >> 4 4 (6) [0, 1, 3, 0, 4, 2]
  // hello 1 >> 2 5 (6) [0, 1, 3, 0, 4, 2]
  // hello >> undefined 5 (5) [0, 1, 3, 0, 4]

  let currentPointedEle = 0;

  for (let i = 0; i < arr.length; i++) {
    // console.log("hello 1 >>", arr[i], i, arr);
    if (arr[i] !== val) {
      arr[currentPointedEle] = arr[i];
      currentPointedEle++;
    } else if (arr[i] === val) {
      arr.splice(i, 1);
      // console.log("hello >>", arr[i], i, arr);
      i--;
    }
  }
  return arr;
}
// console.log(removeElementByMe([0, 1, 2, 2, 3, 0, 4, 2], 2));

function removeElementByNamaste(arr, val) {
  // hello 1 >> 0 0 1 (8) [0, 1, 2, 2, 3, 0, 4, 2]
  // hello 1 >> 1 1 2 (8) [0, 1, 2, 2, 3, 0, 4, 2]
  // hello 1 >> 4 3 3 (8) [0, 1, 3, 2, 3, 0, 4, 2]
  // hello 1 >> 5 0 4 (8) [0, 1, 3, 0, 3, 0, 4, 2]
  // hello 1 >> 6 4 5 (8) [0, 1, 3, 0, 4, 0, 4, 2]
  let currentPointedEle = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      arr[currentPointedEle] = arr[i];
      currentPointedEle++;
      console.log("hello 1 >>", i, arr[i], currentPointedEle, arr);
    }
  }
  if (arr[arr.length - 1] === val) arr.splice(arr.length - 1, 1);
  return arr;
}
// console.log(removeElementByNamaste([0, 1, 2, 2, 3, 0, 4, 2], 2));

// 344. Reverse String
function reverseStringByMe(s) {
  const iterationCount = Math.floor(s.length / 2);
  for (let i = 0; i < iterationCount; i++) {
    let leftPointer = s[i];
    let rightPointer = s[s.length - i - 1];
    s[i] = rightPointer;
    s[s.length - i - 1] = leftPointer;
  }
  return s;
}
// console.log(reverseStringByMe(["h", "e", "l", "l", "o"]));

function reverseStringNamaste(s) {
  let len = s.length;
  let halfLen = Math.floor(len / 2);

  for (let i = 0; i < halfLen; i++) {
    let temp = s[i];
    s[i] = s[len - i - 1];
    s[len - i - 1] = temp;
  }
}
// console.log(reverseStringNamaste(["h", "e", "l", "l", "o"]));

// 121. Best Time to Buy and Sell Stock
function maxProfitByMeBF__namaste(prices) {
  // [7, 1, 5, 3, 6, 4] <-- input

  // hello >> 0 1 buy: 7 sell: 1 profit: -6 maxProfit: -6
  // hello >> 0 2 buy: 7 sell: 5 profit: -2 maxProfit: -2
  // hello >> 0 3 buy: 7 sell: 3 profit: -4 maxProfit: -2
  // hello >> 0 4 buy: 7 sell: 6 profit: -1 maxProfit: -1
  // hello >> 0 5 buy: 7 sell: 4 profit: -3 maxProfit: -1

  // hello >> 1 2 buy: 1 sell: 5 profit: 4 maxProfit: 4
  // hello >> 1 3 buy: 1 sell: 3 profit: 2 maxProfit: 4
  // hello >> 1 4 buy: 1 sell: 6 profit: 5 maxProfit: 5
  // hello >> 1 5 buy: 1 sell: 4 profit: 3 maxProfit: 5

  // hello >> 2 3 buy: 5 sell: 3 profit: -2 maxProfit: 5
  // hello >> 2 4 buy: 5 sell: 6 profit: 1 maxProfit: 5
  // hello >> 2 5 buy: 5 sell: 4 profit: -1 maxProfit: 5

  // hello >> 3 4 buy: 3 sell: 6 profit: 3 maxProfit: 5
  // hello >> 3 5 buy: 3 sell: 4 profit: 1 maxProfit: 5

  // hello >> 4 5 buy: 6 sell: 4 profit: -2 maxProfit: 5

  let maxProfit = -Infinity;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i];
      maxProfit = Math.max(profit, maxProfit);
      console.log(
        "hello >>",
        i,
        j,
        "buy:",
        prices[i],
        "sell:",
        prices[j],
        "profit:",
        profit,
        "maxProfit:",
        maxProfit
      );
    }
  }
  return maxProfit < 0 ? 0 : maxProfit;
}
// console.log(maxProfitByMeBF__namaste([7, 1, 5, 3, 6, 4]));

function maxProfitByMeTwo(prices) {
  // [7, 1, 5, 3, 6, 4] <-- Input
  // hello >> i: 1 price: 1 minBuyPrice: 1 profit: -6 maxProfit: -6
  // hello >> i: 2 price: 5 minBuyPrice: 1 profit: 4 maxProfit: 4
  // hello >> i: 3 price: 3 minBuyPrice: 1 profit: 2 maxProfit: 4
  // hello >> i: 4 price: 6 minBuyPrice: 1 profit: 5 maxProfit: 5
  // hello >> i: 5 price: 4 minBuyPrice: 1 profit: 3 maxProfit: 5
  let maxProfit = -Infinity;
  let minBuyPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    // → first check the profit using the min price seen before today.
    // → Then update minBuyPrice for the future.
    let profit = prices[i] - minBuyPrice;
    minBuyPrice = Math.min(minBuyPrice, prices[i]);
    maxProfit = Math.max(profit, maxProfit);
    console.log(
      "hello >> i:",
      i,
      "price:",
      prices[i],
      "minBuyPrice:",
      minBuyPrice,
      "profit:",
      profit,
      "maxProfit:",
      maxProfit
    );
  }
  return maxProfit < 0 ? 0 : maxProfit;
}
// console.log(maxProfitByMeTwo([7, 1, 5, 3, 6, 4]));

// 88. Merge Sorted Array
function mergeSortByMe(nums1, m, nums2, n) {
  // 2, 15, 4, 13, 7, 41, 6, 40, 12, 41
  // 2,
  // 2, 15
  // 2, 4, 15
  // 2, 4, 13, 15
  // 2, 4, 13, 7, 15
  nums1.push(...nums2);
  for (let i = 0; i < nums1.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums1[i] < nums1[j]) {
        let temp = nums1[i];
        nums1[i] = nums1[j];
        nums1[j] = temp;
      }
    }
  }
  return nums1;
}

// still need to do with best approach

// 283. Move Zeroes
function moveZeroesByMe(nums) {
  // 5, 4, 5, 0, 9, 8, 7, 4
  // 5, 4, 5, 9, 8, 7, 4, 0
  // --------> 9, 8, 7, 4, 0 <-- using while loop
  // --------------------> 0 <-- push at the end (nums[nums.length - 1] = 0;)
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i], i);
    if (nums[i] === 0) {
      let temp = i;
      while (temp < nums.length - 1) {
        nums[temp] = nums[temp + 1];
        temp++;
      }
      nums[nums.length - 1] = 0;
    }
  }
  return nums;
}

function moveZeroesTwoNamateAndMe(nums) {
  // 0, 1, 0, 3, 12, 0, 0, 0, 9, 1, 5, 0, 0, 7
  // 1, 1, 0, 3, 12, 0, 0, 0, 9, 1, 5, 0, 0, 7
  // 1, 1, 0, 3, 12, 0, 0, 0, 9, 1, 5, 0, 0, 7
  // 1, 3, 0, 3, 12, 0, 0, 0, 9, 1, 5, 0, 0, 7
  // 1, 3, 12, 3, 12, 0, 0, 0, 9, 1, 5, 0, 0, 7
  // 1, 3, 12, 9, 12, 0, 0, 0, 9, 1, 5, 0, 0, 7
  // 1, 3, 12, 9, 1, 0, 0, 0, 9, 1, 5, 0, 0, 7
  // 1, 3, 12, 9, 1, 5, 0, 0, 9, 1, 5, 0, 0, 7
  // 1, 3, 12, 9, 1, 5, 7, 0, 9, 1, 5, 0, 0, 7

  let savePointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[savePointer] = nums[i];
      savePointer++;
    }
  }
  for (let i = savePointer; i < nums.length; i++) {
    nums.splice(i, 1, 0);
  }
  return nums;
}

// 485. Max Consecutive Ones
// Is almost same as namasteJs in term of logic and T_S complexity
function findMaxConsecutiveOnesByMe(nums) {
  // 1, 1, 0, 1, 1, 1 max 0
  // 1, 1, 0, 1, 1, 1 ->0  1 tempMax  max 0 (check max / tempMax here)
  // 1, 1, 0, 1, 1, 1 ->1  2 tempMax  max 0 (check max / tempMax here)
  // 1, 1, 0, 1, 1, 1 ->2  0 tempMax  max 2 (check max / tempMax here)
  // 1, 1, 0, 1, 1, 1 ->3  1 tempMax  max 0 (check max / tempMax here)
  // 1, 1, 0, 1, 1, 1 ->4  2 tempMax  max 0 (check max / tempMax here)
  // 1, 1, 0, 1, 1, 1 ->5  3 tempMax  max 3 (check max / tempMax here)

  let tempMax = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      tempMax = tempMax + 1;
      max = Math.max(tempMax, max);
    } else {
      tempMax = 0;
    }
  }
  return max;
}

// 268. Missing Number
function missingNumberByMe(nums) {
  // 3, 0, 1
  let numsObj = {};
  let missingVal = null;
  for (let i = 0; i < nums.length; i++) {
    numsObj[nums[i]] = i;
  }
  for (let i = Math.min(...nums); i <= nums.length; i++) {
    // console.log(numsObj[i], numsObj);
    if (numsObj[i] === undefined) missingVal = i;
  }
  return missingVal;
}

function missingNumberByMeNamaste(nums) {
  // 3, 0, 1
  let length = nums.length;
  let totalSum = (length * (length + 1)) / 2;
  let partialSum = null;
  for (let i = 0; i < nums.length; i++) {
    partialSum = +nums[i];
  }
  console.log(totalSum, partialSum);
  return totalSum - partialSum;
}

var missingNumberByMeNamaste_2 = function (nums) {
  // 1, 2, 3, 4, 5
  // 3, 0, 1
  // 0, 1, 3
  nums.sort((a, b) => a - b);

  if (nums[0] !== 0) return 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1] + 1) {
      return nums[i - 1] + 1;
    }
  }

  return nums.length;
};

// 136. Single Number
function singleNumberByMeNamaste(nums) {
  // 2, 2, 1
  let countNum = {};
  for (let i = 0; i < nums.length; i++) {
    if (countNum[nums[i]] === undefined) {
      countNum[nums[i]] = 1;
    } else {
      countNum[nums[i]] = countNum[nums[i]] + 1;
    }
  }

  for (const key in countNum) {
    if (countNum[key] === 1) {
      return Number(key);
    }
  }
}

function singleNumberNamaste(nums) {
  // 2, 2, 1
  // ^ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
}

// --------------------------- 5

function sumOfFirstNnumberByMe(n) {
  // 5, 4, 3, 2, 1
  // ----->     // 5 + (5-1) ==> 5 + 10
  // ----->       // 4 + (4-1) ==> 4 + 6
  // ----->         // 3 + (3-1) ==> 3 + 3
  // ----->           // 2 + (2-1) ==> 2 + 1
  // ----->             // 1 + (1-1) ==> 1 + 0
  // ----->               // (1-1) ==> 0
  if (n < 1) return 0;
  return n + sumOfFirstNnumber(n - 1);
}

function sumOfAllElementsInArrUsingRecusionByMe(arr, numberOfEle) {
  // 0+4
  // 4+1
  // so on...
  if (numberOfEle < 0) return 0;

  return (
    arr[numberOfEle] + sumOfAllElementsInArrUsingRecusion(arr, numberOfEle - 1)
  );
}

function sumOfAllOddElementsInArrUsingRecusionByMe(arr, numberOfEle) {
  // [5, 4, 3, 2, 1]
  if (numberOfEle < 0) return 0;

  if (arr[numberOfEle] % 2 === 1) {
    return (
      arr[numberOfEle] +
      sumOfAllOddElementsInArrUsingRecusion(arr, numberOfEle - 1)
    );
  } else {
    return sumOfAllOddElementsInArrUsingRecusion(arr, numberOfEle - 1);
  }
}

function factorialByMe(n) {
  // 5*4*3*2*1

  if (n === 1) return 1;
  return n * factorialByMe(n - 1);
}

// 231. Power of Two
function isPowerOfTwoByMe(n, powVal) {
  // 2*2*2*2
  if (n === 1) return true;
  if (powVal === n) return true;
  if (powVal > n) return false;

  let nextPow = powVal * 2;
  return isPowerOfTwoByMe(n, nextPow);
}
// console.log(isPowerOfTwoByMe(8, 2));

function isPowerOfTwoNamaste(n) {
  // 16/2 -->8/2 -->4/2 -->2/2 --> will get 1 for all even number
  // 5/2 -->2.5/2 -->0.[something] -->0. --> will get 0 for all odd number
  if (n === 1) return true;
  if (Math.floor(n) === 0) return false;

  return isPowerOfTwoNamaste(n / 2);
}

// 509. Fibonacci Number
function fibVal(n) {
  //                               fib(6)
  //                           /             \
  //                       fib(5)             fib(4)
  //                    /        \          /        \
  //               fib(4)        fib(3)  fib(3)      fib(2)
  //             /      \       /    \   /    \     /    \
  //         fib(3)    fib(2) fib(2) fib(1) fib(2) fib(1) fib(0)
  //        /    \    /    \  /   \        /   \
  //   fib(2)  fib(1)fib(1)fib(0)fib(1)  fib(1) fib(0)
  //   /   \
  // fib(1) fib(0)

  // Breakdown with arrows for fib(6)

  // fib(6)
  // → calls fib(5) and fib(4)

  // fib(5)
  // → calls fib(4) and fib(3)

  // fib(4)
  // → calls fib(3) and fib(2)

  // fib(3)
  // → calls fib(2) and fib(1)

  // fib(2)
  // → calls fib(1) and fib(0)

  // fib(1) → returns 1

  // fib(0) → returns 0

  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibVal(n - 1) + fibVal(n - 2);
}

function fibValUsingIteration(n) {
  // 0, 1, 2, 3, 4, 5, 6,  7,  8,  9,
  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
  if (n === 0) return 0;
  if (n === 1) return 1;

  let fibSeries = [];

  for (let i = 0; i <= n; i++) {
    if (i === 0 || i === 1) {
      fibSeries.push(i);
    } else {
      fibSeries.push(
        fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2]
      );
    }
  }
  console.log(fibSeries);
  return fibSeries[fibSeries.length - 1];
}

// --------------------------- 6

// 704. Binary Search
function binarySearchByMe(nums, target) {
  // this is not working, used while loop below
  // -1, 0, 3, 5, 9, 12
  let l = 0;
  let r = nums.length - 1;
  for (l = 0; l <= r; l++) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    if (target > nums[mid]) {
      l = mid;
      // console.log(target, l, r);
    } else {
      r = mid;
      // console.log(target, l, r);
    }
    console.log(mid, l, r);
  }
  return -1;
}

// 704. Binary Search
function binarySearchByMeWhile(nums, target) {
  // -1, 0, 3, 5, 9, 12
  let l = 0;
  let r = nums.length - 1;
  let count = 1;

  while (l <= r) {
    console.log(l, r);
    count++;
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      // console.log("count", count);
      return mid;
    }
    // -1, 0, 3, 5, 9, 12, 15, 25, 41, 55
    if (target > nums[mid]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  // console.log("count", count);
  return -1;
}
// console.log(binarySearchByMeWhile([-1, 0, 3, 5, 9, 12, 15, 25, 41, 55], 15));

function binarySearchByNamaste(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (right >= left) {
    let middle = Math.floor((left + right) / 2);
    console.log(left, right, middle);
    // -1, 0, 3, 5, 9, 12, 15, 25, 41, 55
    if (target === nums[middle]) {
      return middle;
    } else if (target < nums[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}
// console.log(binarySearchByNamaste([-1, 0, 3, 5, 9, 12, 15, 25, 41, 55], 15));

function bubbleSortByMe(array) {
  // 1, 2, 4, 6
  //---> 2, 1, 4, 6  <-- 0
  //---> 4, 1, 2, 6  <-- 0
  //---> 6, 1, 2, 4  <-- 0
  // 6, 1, 2, 4
  //---> 6, 2, 1, 4  <-- 1
  //---> 6, 4, 1, 2  <-- 1
  // 6, 4, 1, 2
  //---> 6, 4, 2, 1 <-- 2
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] < array[j]) {
        const temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}
// console.log(bubbleSortByMe([1, 2, 4, 6]));

function selectionSortByMe(arr) {
  // 17, 20, 5, 4, 3, 2, 8, 12, 35, 24, 15, 16,

  for (let i = 0; i < arr.length; i++) {
    let smallEle = arr[i];
    let elementDiceToBeReplaced = i;
    let elementDiceWhichReplaced = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (smallEle > arr[j]) {
        elementDiceWhichReplaced = j;
        smallEle = arr[j];
      }
    }
    let temp = arr[elementDiceWhichReplaced];
    arr[elementDiceWhichReplaced] = arr[elementDiceToBeReplaced];
    arr[elementDiceToBeReplaced] = temp;
  }
  return arr;
}

function selectionSortByNamaste(arr) {
  // 17, 20, 5, 4, 3, 2, 8, 12, 35, 24, 15, 16,

  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

function insertionSortByMe(arr) {
  console.log([5, 3, 4, 1, 2]);
  // 17, 20, 5, 4, 3, 2, 8, 12, 35, 24, 15, 16,
  for (let i = 1; i < arr.length; i++) {
    // Start from 1 instead of 0
    for (let j = i; j > 0; j--) {
      // Modified inner loop
      if (arr[j] < arr[j - 1]) {
        // Compare with previous element
        // Swap (keeping your original swap style)
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break; // Key optimization for insertion sort
      }
    }
    console.log("insertionSortByMe", arr);
  }
  return arr;
}
// Example
// console.log(insertionSortByMe([5, 3, 4, 1, 2]));

// const arr = [17, 20, 5, 4, 3, 2, 8, 12, 35, 24, 15, 16];
// console.log(insertionSortByMe(arr));
// const target = 3;
// const arr = [4, 1, 2, 1, 9, 2, 4];
// const val = 2;
// const arr = ["h", "e", "l", "l", "o"];
// const arr = [2, 15, 4, 13, 7, 41, 6, 40, 12, 41];
// const arr = -120;
// const arr = 121;
console.log("-------------");

// --------------------------- 7

// 707. Design Linked List
/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

class CreateNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
var MyLinkedList = function (val) {
  this.head = null;
  this.next = null;
  this.size = 0;
  let newNode = new CreateNode(val);
  this.head = newNode;
};

MyLinkedList.prototype.addAtHead = function (val) {
  // 1 // new CreateNode(val)
  // 1 --> 2 --> 3 // newNode.next=this.head
  let newNode = new CreateNode(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

MyLinkedList.prototype.addAtTail = function (val) {
  // 4 // new CreateNode(val)
  // 1 --> 2 --> 3 // newNode.next=this.head
  let newNode = new CreateNode(val);
  let head = this.head;
  let isTailNodeGet = false;
  let nextNode = head;

  if (this.head === null) {
    this.head = null;
    this.next = null;
    let newNode = new CreateNode(val);
    this.head = newNode;
    this.size = 0;
    return;
  }
  while (!isTailNodeGet) {
    if (nextNode.next !== null) {
      nextNode = nextNode.next;
    } else {
      nextNode.next = newNode;
      this.size++;
      isTailNodeGet = true;
    }
  }
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  // 1 --> 2 --> 3 --> 4 --> 5

  if (index < 0 || index > this.size) return;
  if (index === 0) return this.addAtHead(val);
  if (index === this.size) return this.addAtTail(val);
  const newNode = new CreateNode(val);
  let curr = this.head;
  for (let i = 0; i < index - 1; i++) curr = curr.next;
  newNode.next = curr.next;
  curr.next = newNode;
  this.size++;
};

MyLinkedList.prototype.get = function (index) {
  // 3 --> 4
  // 1 --> 2 --> 3 --> 6 --> 4 --> 5
  if (index < 0 || index > this.size) return -1;
  let curr = this.head;
  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }
  return curr.val;
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  // 3 --> 14
  // 1 --> 2 --> 3 --> 14 --> 5

  if (index < 0 || index > this.size) return;
  if (index === 0) this.head = this.head.next;
  else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) curr = curr.next;
    curr.next = curr.next.next;
  }
  this.size--;
};

// var obj = new MyLinkedList(2);
// obj.addAtHead(1);
// obj.addAtTail(3);
// obj.addAtTail(14);
// obj.addAtTail(5);
// // obj.deleteAtIndex(3);
// console.log(obj);
console.log("----------");
// 876. Middle of the Linked List
function middleNodeByMe() {
  let head = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 14,
          next: {
            val: 5,
            next: null,
          },
        },
      },
    },
    size: 4,
  };
  // 1,2,3,4,5,6
  // 1 --> 2 --> 3 --> 14 --> 5 --> 20
  let isTailNodeGet = false;
  let nextNode = head;
  let size = 0;

  while (!isTailNodeGet) {
    if (nextNode.next !== null) {
      nextNode = nextNode.next;
    } else {
      isTailNodeGet = true;
    }
    size++;
  }
  size--;

  let terminationCondi = Math.ceil(size / 2);
  if (size % 2 === 0) {
    terminationCondi = size / 2;
  }
  let curr = head;
  for (let i = 0; i < terminationCondi; i++) {
    curr = curr.next;
  }
  return curr;
}
// middleNodeByMe();

function middleNodeByMeNamasteJs() {
  // 1,2,3,4,5,6
  // 1 --> 2 --> 3 --> 14 --> 5 --> 20
  let head = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 14,
          next: {
            val: 5,
            next: {
              val: 20,
              next: null,
            },
          },
        },
      },
    },
    size: 4,
  };

  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    console.log(slow, fast);
  }
  // return slow;
  console.log(slow);
}

// middleNodeByMeNamasteJs();

function reversedLinkedListByNamasteJs() {
  // 1,2,3,4,5,6
  // 1 --> 2 --> 3 --> 14 --> 5 --> 20
  // 20 --> 5 --> 14 --> 3 --> 2 --> 1
  let head = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 14,
          next: {
            val: 5,
            next: {
              val: 20,
              next: null,
            },
          },
        },
      },
    },
    size: 4,
  };

  let preViouse = null;
  let current = head;
  while (current) {
    let temp = current.next;
    current.next = preViouse;
    preViouse = current;
    current = temp;
  }
  // return slow;
  head = preViouse;
  console.log(head);
}

function LinkedListCycle() {
  // 1 --> 2 --> 3 --> 14 --> 5 --> 20 --> null // not cycle
  // 1 --> 2 --> 3 --> 14 --> 5 --> 20 --> 3  //cycle
  let head = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 14,
          next: {
            val: 5,
            next: {
              val: 20,
              next: {
                val: 3,
                next: null,
              },
            },
          },
        },
      },
    },
    size: 4,
  };
  let setDataStructure = new Set();

  let curr = head;
  while (curr) {
    if (!setDataStructure.has(curr.val)) {
      setDataStructure.add(curr.val);
    } else {
      console.log("get cycle", curr);
      return true;
    }
    curr = curr.next;
  }
  if (!curr) {
    return false;
  }
}

// console.log(LinkedListCycle());
