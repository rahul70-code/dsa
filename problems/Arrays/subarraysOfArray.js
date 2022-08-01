// Javascript code to print all possible
// subarrays for given array using recursion
 
// Recursive function to print all
// possible subarrays for given array
function getSubArrays(arr, start, end, result)
{
     
    // Stop if we have reached the end
    // of the array    
    if (end == arr.length)
        return result;
       
    // Increment the end point and start
    // from 0
    else if (start > end)
        getSubArrays(arr, 0, end + 1, result);
           
    // Print the subarray and increment
    // the starting point
    else
    {
        // console.log("[");
        let r = []
        for(var i = start; i < end; i++)
        {
            // console.log( arr[i] + ", ");
            r.push(arr[i])
        }
         r.push(arr[end])
         result.push(r)
        // console.log(arr[end] + "]");
        getSubArrays(arr, start + 1, end, result);
    }
    return result;
}
 
// Driver code
var arr = [4,-2,-3,4,1]
let result = getSubArrays(arr, 0, 0, []);
console.log(result)
let count = 0;
result.forEach(r => {
    r.sort((a,b) => a-b)
    if(r.length > 0) count+=r[r.length-1] - r[0]
})
console.log(count)

// optimal solution - Monotonic stack
// https://leetcode.com/problems/sum-of-subarray-ranges/discuss/1625501/JavaScript-All-Solutions-With-a-Step-by-Step-Tackling-of-the-Problem

// O(n) time | O(n) space
var subArrayRanges = function(nums) {
	/**
	 * The max range for each value in a negative copy of the array will be the min range...
	 * for the same value in the positive array.
	 */
	const N = nums.map(n => -n)
	return getMaxRange(nums) + getMaxRange(N)

	function getMaxRange(nums) {
		/**
		 * Monotonic stack initialized with a -1 for potential edge cases where we have...
		 * no values in the stack and we wanna calculate the left range of the poped number.
		 */
		const S = [-1]
		nums.push(Infinity)
		let res = 0
		for (let i = 0; i < nums.length; i++) {
			/**
			 * If we're poping values that're smaller than us that mean we gonna end up with a...
			 * boundary to our left that's greater than us, meaning we extended our range to include...
			 * all of the values that're smaller than us, meaning we got the full left range...
			 * in which we are the max.
			 */
			/**
			 * We will get the right range when a value from future position in the array pop us out...
			 * that's why we have an Infinity value at the end of the array that will pop the last...
		  	 * number out!
			 */
			while (nums[S[S.length - 1]] < nums[i]) {
				const MOST_MAX = S.pop(),
					LEFT_BOUNDARY = S[S.length - 1]
				const LEFT_RANGE = MOST_MAX - LEFT_BOUNDARY,
					RIGHT_RANGE = i - MOST_MAX
				/**
				 * By multiplying all these 3 values we get exactly how many times this number...
				 * was a max in its range!
				 */
				res += nums[MOST_MAX] * LEFT_RANGE * RIGHT_RANGE
			}
			S.push(i)
		}
		return res
	}
};