//Java

class Solution {
    public int countVowelStrings(int n) {
        Integer[][] memo = new Integer[n + 1][5];
        return dp(n, 0, memo);
    }

    int dp(int n, int i, Integer memo[][]) {
        if (n == 0) return 1; // Found a valid answer
        if (i == 5) return 0; // Reach to length of vowels [a, e, i, o, u]
        if (memo[n][i] != null) return memo[n][i];
        
        int ans = dp(n, i+1, memo); //  Skip vowels[i]
        ans += dp(n-1, i, memo); // Include vowels[i]
        
        return memo[n][i] = ans;
    }
}

// Complexity:

//     Time: O(N * vowelsLen * 2), where vowelsLen is length of vowels (=5).
//     Space: O(N* vowelsLen)
