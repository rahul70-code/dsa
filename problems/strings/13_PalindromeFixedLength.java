class Solution {
/*
First Palindrome of length 4 = "10"+"01"
First Palindrome of length 3 = "10"+"_1" (without first character 0)
First half can range from 10 (which is 10^1) to 99 (which is 10^2-1)
*/
    public long[] kthPalindrome(int[] queries, int intLength) {
        long[] result = new long[queries.length];
        int i = 0;
        for(int num: queries){
			long half = (intLength+1)/2;//half for 3 =2, half for 4 = 2
			long start = (long)Math.pow(10,half-1);
			long end = (long)Math.pow(10,half)-1;
			if(num<=(end-start+1)){ //check if query is within range
				String firstHalfOfPalindrome = ((start)+ (num-1))+"";
				String secondHalf = (new StringBuffer(firstHalfOfPalindrome)).reverse().toString();
				result[i++] = Long.parseLong(firstHalfOfPalindrome+secondHalf.substring(intLength%2)); // since half is calculated as 1 extra for odd numbers, remove the first char for odd length in substring - 1001 vs 10+(0)1 
			}else{
				result[i++]=-1;
			}
        }
        return result;
    }
}