function compress(s)
{
    let num = s.length; //calculating length of the string
    let i=0; 
    let result = []
    while ( i < num) {
 
        // Counting the repetitions of each character 
        let repetition = 1;
        while (s[i] == s[i+1] && i < num-1 ) {
            repetition++;
            i++;
        }
        
        // Print character and its count
        result.push(`${s[i]}`,`${repetition > 1 ? repetition : ""}`)
        i++;
    }
    return result
}

// https://leetcode.com/problems/string-compression/
/**
 * @param {character[]} chars
 * @return {number}
 */
 var compress = function(chars) {
    if (!chars.length) return 0;
    let j = 0;
    let cur = chars[0];
    let counter = 0;
    for (let i = 0; i <= chars.length; i++) {
      if (chars[i] === cur) {
        counter++;
      } else {
        chars[j] = cur;
        if (counter > 1) {
          const s = counter.toString();
          for (let k = 0; k < s.length; k++) chars[++j] = s[k];
        }
        j++;
        cur = chars[i];
        counter = 1;
      }
    }
    return j;
  };
  


console.log(compress(["a","a","b","b","c","c","c"]))