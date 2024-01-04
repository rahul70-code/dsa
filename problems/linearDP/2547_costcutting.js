https://leetcode.com/problems/minimum-cost-to-split-an-array/solutions/3083785/javascript-dp-top-down-bottom-up/?orderBy=most_votes&languageTags=javascript
var minCost = function(nums, k) {
    let n = nums.length, memo = Array(n).fill(-1);
    return dp(0);
    
    function dp(i) {
      if (i === n) return 0;
      if (memo[i] !== -1) return memo[i];
      // count is used to calculate unique values for calc cost of unique values.
      let ans = Infinity, count = new Map(), uniqueCount = 0;
      for (let j = i; j < n; j++) {
        let currCount = count.get(nums[j]) || 0;
        if (currCount === 0) {
          uniqueCount++;
        } else if (currCount === 1) {
          uniqueCount--;
        }
        count.set(nums[j], currCount + 1);
        let nonUnique = (j - i + 1) - uniqueCount;
        let cost = k + nonUnique;
        ans = Math.min(ans, cost + dp(j + 1));
      }
      return memo[i] = ans;
    }  
  };


  console.log(minCost([1,2,1,2,1,3,3], 2))