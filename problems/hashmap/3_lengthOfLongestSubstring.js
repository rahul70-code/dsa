let lengthOfLongestSubstring = (s) => {
    const map = {};
    var l= 0;
    
    return s.split('').reduce((max, v, r) => {
        l = map[v] >= l ? map[v] + 1 : l;
        map[v] = r;
        return Math.max(max, r - l + 1);
    }, 0);
}

console.log(lengthOfLongestSubstring("pwwkew"))