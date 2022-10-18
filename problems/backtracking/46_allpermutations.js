const permutStr = (str) => {
  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
  return str
    .split("")
    .reduce(
      (acc, letter, i) =>
        acc.concat(
          permut(str.slice(0, i) + str.slice(i + 1)).map((val) => letter + val)
        ),
      []
    );
};
// const str = "abc";
// let result = permutStr(str)
// console.log(result)

const permutNumArr = (inputArr) => {
  var results = [];

  function permute(arr, memo) {
    var cur, memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }

    return results;
  }

  return permute(inputArr);
}

// https://leetcode.com/problems/permutations/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  var results = [];

  function permute1(arr, memo) {
    var cur, memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute1(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }

    return results;
  }

  return permute1(nums)
};

let numArr = [1, 2, 3]
let result1 = permutNumArr(numArr)
console.log(result1)