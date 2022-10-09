const totalSteps = (a) => MonotonicStack(a);

const MonotonicStack = (a) => {
    let n = a.length, st = [], dp = Array(n).fill(0), res = 0;
    for (let i = n - 1; ~i; i--) {
        while (st.length && a[i] > a[st[st.length - 1]]) {
            let last = st.pop();
            dp[i] = Math.max(dp[i] + 1, dp[last]);
        }
        st.push(i);
        res = Math.max(res, dp[i]);
    }
    return res;
};

console.log(totalSteps([5,3,4,4,7,3,6,11,8,5,11]))