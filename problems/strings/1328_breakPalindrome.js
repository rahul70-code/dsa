/**
 * @param {string} palindrome
 * @return {string}
 */
 var breakPalindrome = function(p) {
    if(p.length <= 1) return "";
         let acount=0;
    
    for (let i=0; i<p.length; i++) {
        if (p[i] === 'a') acount++;
    }
    
    if (p.length-1 === acount) return p.slice(0, p.length-1)+'b';
    for(let i=0;i<p.length;i++) {
        if(p[i] > 'a') {
            p = p.substring(0, i) + "a" + p.substring(i+1, p.length);
            return p
        }
    }
    
    return p.slice(0,p.length-1) + "b";
};