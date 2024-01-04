// {15,-2,2,-8,1,7,10,23} 	

// largest subarray with 0 sum


function subarraySum(arr) {
            // Creates an empty hashMap hM
        let hM = new Map();
 
        let sum = 0; // Initialize sum of elements
        let max_len = 0; // Initialize result
 
        // Traverse through the given array
        for (let i = 0; i < arr.length; i++) {
            
            // Add current element to sum
            // bsically prefix sum
            sum += arr[i];
 
            if (arr[i] == 0 && max_len == 0)
                max_len = 1;
 
            if (sum == 0)
                max_len = i + 1;
 
            // Look this sum in hash table
            let prev_i = hM.get(sum);
 
            // If this sum is seen before, then update max_len
            // if required
            if (prev_i != null)
                max_len = Math.max(max_len, i - prev_i);
                
            else // Else put this sum in hash table
                hM.set(sum, i);
        }
 
        return max_len;
}

let result = subarraySum([0])
console.log(result)