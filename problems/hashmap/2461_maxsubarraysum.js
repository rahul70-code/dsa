// 2461. Maximum Sum of Distinct Subarrays With Length K
// https://leetcode.com/contest/weekly-contest-318/problems/maximum-sum-of-distinct-subarrays-with-length-k/

var maximumSubarraySum = function(nums, k) {
    let ans = 0, sum = 0;
    let map = new Map();
    for (let i=0; i<nums.length; i++){
      sum+= nums[i];
      if(map.has(nums[i])){
        let value = map.get(nums[i]);
        map.set(nums[i], value+1);
      }else{
        map.set(nums[i], 1);
      }
      if(i>=k-1){
        if(map.size === k){
          ans = Math.max(sum,ans);
        }
        sum = sum - nums[i-k+1];
        let freq = map.get(nums[i-k+1]);
        if(freq === 1){
          map.delete(nums[i-k+1]);
        }else{
          map.set(nums[i-k+1], freq - 1);
        }
    }
   }
    return ans;
  }


console.log(maximumSubarraySum([1,5,4,2,9,9,9], 3))

// using set
// https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/solutions/2784324/javascript-sliding-window-w-two-pointers-set/?orderBy=most_votes&languageTags=javascript