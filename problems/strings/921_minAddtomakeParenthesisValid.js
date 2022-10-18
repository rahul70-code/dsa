/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (text) {
    // difference count
    let diffCount = 0;
    let ans = 0;
    for (let i = 0; i < text.length; i++) {
        // if "(" increment diffcount
        if (text[i] == "(") diffCount += 1;
        // if ")" increment diffcount

        if (text[i] == ")") diffCount -= 1;
        // if not balanced and some are going in negative
        // increment diffcount and increment ans count to make it valid
        if (diffCount < 0) {
            diffCount += 1;
            ans += 1;
        }
    }
    // return addition of ans and diffcount
    return ans + diffCount;
};

// dry run
// "((("
// diffcount = 1
// diffcount = 2
// diffcount = 3
// return 3


// ")))"
// diffcount = -1, -> diffcount = 0, ans=1
// diffcount = -1 -> diffcount = 0, ans=2 
// diffcount = -1 -> diffcount=0, ans=3
// return 3
