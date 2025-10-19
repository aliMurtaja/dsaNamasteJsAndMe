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
