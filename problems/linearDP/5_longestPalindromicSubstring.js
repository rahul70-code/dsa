let dp = []; // to memoize the results

function isPalindrome(str, i, j) {
    // if |abccba| is a palindrome then |bccb| is always going to be palindrome
    // use memo to reduce extra comparisons
    if (dp[i - 1] && dp[i - 1][j + 1]) return true;

    while (i < j) {
        if (str[i] !== str[j]) return false;
        i++; j--;
    }
    return true;
}

function longestPalinHelper(str, i, j) {
    if (dp[i][j]) return dp[i][j]; // If solution already calculated return from dp[][]
    if (i === j) return dp[i][j] = 1; // Length 1 strings are always palindrome

    if (isPalindrome(str, i, j)) dp[i][j] = j - i + 1;
    else dp[i][j] = Math.max(
        longestPalinHelper(str, i, j - 1),
        longestPalinHelper(str, i + 1, j)
    );

    return dp[i][j]
}

function longestPalindromeDP(s) {
    const n = s.length;
    dp = Array(n);
    for (let i = 0; i < n; i++) {
        // Init the dp with 0 values
        dp[i] = Array(n).fill(0);
    }
    const longest = longestPalinHelper(s, 0, n - 1);

    for (let i = 0; i < n; i++) {
        const j = dp[i].indexOf(longest);
        // First time the longest count found we just have to 
        // look back for those many chars before that 
        // dp[i][j] stores longest string found between start index i and end index j
        // (j - longest + 1) -> starting point of the longest substring
        // j -> end point of longest substring inclusive 
        // (used j + 1 as string method substring returns result till j)
        if (j || j === 0) return s.substring(j - longest + 1, j + 1);
    }
}

function main() {
    const s = "babad";
    // const s = "cbbd";
    // const s = "a";
    console.log(longestPalindromeDP(s));
}

main();