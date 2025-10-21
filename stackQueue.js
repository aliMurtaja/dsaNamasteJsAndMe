// 225. Implement Stack using Queues
// 1st approach
var MyStack = function () {
  this.arr1 = [];
  this.arr2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.arr1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  const arr1Len = this.arr1.length;

  for (let i = 0; i < arr1Len - 1; i++) {
    this.arr2.push(this.arr1.shift());
  }
  const topVal = this.arr1.shift();

  this.arr1 = this.arr2;
  return topVal;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  const arr1Len = this.arr1.length;

  for (let i = 0; i < arr1Len - 1; i++) {
    this.arr2.push(this.arr1.shift());
  }
  const topVal = this.arr1.shift();
  this.arr2.push(topVal);

  this.arr1 = this.arr2;
  return topVal;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.arr1.length === 0;
};

const myStackObj = new MyStack();
myStackObj.push(1);
myStackObj.push(2);
myStackObj.push(3);
myStackObj.pop();
myStackObj.push(4);
myStackObj.push(5);
myStackObj.pop();
myStackObj.pop();
// console.log(myStackObj);

// 2st approach
var MyStack = function () {
  this.arr1 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.arr1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  const arr1Len = this.arr1.length;

  for (let i = 0; i < arr1Len - 1; i++) {
    this.arr1.push(this.arr1.shift());
  }
  const topVal = this.arr1.shift();

  return topVal;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  const arr1Len = this.arr1.length;

  for (let i = 0; i < arr1Len - 1; i++) {
    this.arr1.push(this.arr1.shift());
  }
  const topVal = this.arr1.shift();
  this.arr1.push(topVal);

  return topVal;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.arr1.length === 0;
};

// 232. Implement Queue using Stacks

var MyQueue = function () {
  this.arr1 = [];
  this.arr2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.arr1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  const arr1Len = this.arr1.length;

  if (!this.arr2.length) {
    for (let i = 0; i < arr1Len; i++) {
      this.arr2.push(this.arr1.pop());
    }
  }
  this.arr1 = [];
  return this.arr2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  const arr1Len = this.arr1.length;

  if (!this.arr2.length) {
    for (let i = 0; i < arr1Len; i++) {
      this.arr2.push(this.arr1.pop());
    }
  }
  return this.arr2[this.arr2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.arr1.length === 0 && this.arr2.length === 0;
};

// 20. Valid Parentheses
function isValid() {
  let s = "()";

  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      const top = stack.pop();
      if (
        !top ||
        (top === "(" && s[i] !== ")") ||
        (top === "{" && s[i] !== "}") ||
        (top === "[" && s[i] !== "]")
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
// console.log(isValid());

// 205. Isomorphic Strings, very hard
function isIsomorphic() {
  let s = "paper";
  let t = "title";
  const sToT = {};
  const tToS = {};
  for (let i = 0; i < s.length; i++) {
    if (!sToT[s[i]] && !tToS[t[i]]) {
      sToT[s[i]] = t[i];
      tToS[t[i]] = s[i];
    } else if (sToT[s[i]] !== t[i]) {
      return false;
    }
  }
  console.log(sToT, tToS);
  return true;
}
// console.log(isIsomorphic());

// 49. Group Anagrams
function groupAnagrams() {
  let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
  const anGroup = {};

  for (let i = 0; i < strs.length; i++) {
    const sortEle = strs[i].split("").sort().join("");
    if (!anGroup[sortEle]) {
      anGroup[sortEle] = [strs[i]];
    } else {
      anGroup[sortEle].push(strs[i]);
    }
  }
  console.log(anGroup);
  return Object.values(anGroup);
}
// console.log(groupAnagrams());

// // 155. Min Stack(Bad approach)
// var MinStack = function () {
//   this.arr = [];
//   this.min = Number.MIN_VALUE;
// };

// /**
//  * @param {number} val
//  * @return {void}
//  */
// MinStack.prototype.push = function (val) {
//   this.min = Math.min(this.min, val);
//   this.arr.push(val);
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function () {
//   if (this.arr.length > 0) {
//     let min = Number.MIN_VALUE;
//     for (let i = 0; i < this.arr.length - 1; i++) {
//       min = Math.min(min, this.arr[i]);
//     }
//     this.min = min;
//     return this.arr.pop();
//   }
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function () {
//   if (this.arr.length > 0) {
//     return this.arr[this.arr.length - 1];
//   }
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function () {
//   return this.min;
// };

// const minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// console.log(minStack.getMin()); // return -3
// minStack.pop();
// console.log(minStack.top()); // return 0
// console.log(minStack.getMin()); // return -2

// // 155. Min Stack(Good approach)
var MinStack = function () {
  this.arr = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.arr.length === 0) {
    this.arr.push([val, val]);
  } else {
    min = Math.min(this.arr[this.arr.length - 1][1], val);
    this.arr.push([val, min]);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.arr.length > 0) {
    return this.arr.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.arr.length > 0) {
    return this.arr[this.arr.length - 1][0];
  }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.arr[this.arr.length - 1][1];
};

// const minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// console.log(minStack.getMin()); // return -3
// minStack.pop();
// console.log(minStack.top()); // return 0
// console.log(minStack.getMin()); // return -2

// 1021. Remove Outermost Parentheses
function removeOuterParentheses() {
  let s = "(()())(())";
  let innerParen = "";
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    // if(s === '' ||)
    if (arr.length === 0) {
      if (s[i] === "(") {
        arr.push(s[i]);
        // console.log("heloo 1", s[i]);
      }
    } else if (arr.length >= 1) {
      if (s[i] === "(") {
        // console.log("heloo 2", s[i]);
        innerParen = innerParen + s[i];
        arr.push(s[i]);
      } else {
        if (s[i] === ")") {
          // console.log("heloo 4", s[i]);
          let getClosingParen = s[i];
          arr.pop();
          if (arr.length !== 0) {
            innerParen = innerParen + getClosingParen; // <-- Tricky to understand, but I understood
          }
        } else {
        }
      }
    }
  }
  return innerParen;
}
// console.log(removeOuterParentheses());

// 150. Evaluate Reverse Polish Notation
function evalRPN() {
  let tokens = [
    "10",
    "6",
    "9",
    "3",
    "+",
    "-11",
    "*",
    "/",
    "*",
    "17",
    "+",
    "5",
    "+",
  ];
  const arr = [];
  // Output: 22

  for (let i = 0; i < tokens.length; i++) {
    if (
      tokens[i] === "+" ||
      tokens[i] === "-" ||
      tokens[i] === "*" ||
      tokens[i] === "/"
    ) {
      let top = arr.pop();
      let secondTop = arr.pop();
      arr.push(Math.trunc(eval(Number(secondTop) + tokens[i] + Number(top))));
    } else {
      arr.push(tokens[i]);
    }
  }
  console.log(arr);
  return arr[0];
}
// console.log(evalRPN());

// 496. Next Greater Element I
function nextGreaterElement() {
  let nums2 = [1, 3, 4, 2];
  let nums1 = [4, 1, 2];
  // Output: [-1,3,-1]
  let arr = [];
  let output = [];
  let mapWithGreateVal = {};

  for (let i = nums2.length - 1; i >= 0; i--) {
    if (arr.length === 0) {
      arr.push(nums2[i]);
      mapWithGreateVal[nums2[i]] = -1;
    } else {
      for (let j = arr.length - 1; j >= 0; j--) {
        console.log(arr[j], nums2[i]);
        if (arr[j] > nums2[i]) {
          mapWithGreateVal[nums2[i]] = arr[j];
          arr.push(nums2[i]);
          break;
        }
        mapWithGreateVal[nums2[i]] = -1;
        arr = [];
        arr.push(nums2[i]);
      }
    }
  }

  for (let i = 0; i < nums1.length; i++) {
    if (mapWithGreateVal[nums1[i]]) {
      output.push(mapWithGreateVal[nums1[i]]);
    }
  }
  console.log(mapWithGreateVal);
  return output;
}
// console.log(nextGreaterElement());
