// s = "leet**cod*e"
function removeStars(s) {
    let st = [];
    for(let i=0;i<s.length;i++) {
        if(s[i] == "*") st.pop();
        else st.push(s[i])
    }
    return st.join("")
}

console.log(removeStars("leet**cod*e"))