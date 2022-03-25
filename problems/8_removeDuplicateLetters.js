/**
    What the problem statement is saying,

    Given a string s, remove duplicate letters so that every letter appears once and only once. 
    You must make sure your result is the smallest in *lexicographical order* among all possible results.

    example,
    Input :- "cbacdcbc"
    Output :- "acdb"
 */

var removeDuplicateLetters = function (s) {
    let countObject = {};
    let isInStack = {};
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (!countObject[s[i]]) countObject[s[i]] = 0;
        countObject[s[i]]++;
        isInStack[s[i]] = false;
    }
    // iterate through string
    for (let i = 0; i < s.length; i++) {
        let currentLetter = s[i];
        let stackTop = stack[stack.length - 1];
        countObject[currentLetter]--;
        if (isInStack[currentLetter]) continue;
        if (currentLetter < stackTop) {
            //currentLetter comes first lexicographically
            //do more of the stacktop element exist further in the string?
            //(we can find this out from countObject)
            //keep popping while currentLetter < stackTop
            //or if stackTop does not exist further in the string
            while (currentLetter < stackTop && countObject[stackTop] > 0) {
                isInStack[stack.pop()] = false;
                stackTop = stack[stack.length - 1];
            }

            //the stack top should now have a letter which is either lexicographically
            //smaller than currentLetter or 
            //a letter which does not have any more occurrences in the string
            //for example in bbacd, when currentLetter is a, stack top would be b
        }

        //push the currentLetter to stack
        isInStack[currentLetter] = true;
        stack.push(currentLetter);
    }

    //convert stack arrray to string and return
    return stack.join('');
}


/*
class Solution {
    public String removeDuplicateLetters(String s) {
        int[] lastIndex = new int[26];
        for(int i=0;i<s.length();i++) {
            lastIndex[s.charAt(i) - 'a'] = i;
        }

        boolean[] seen = new boolean[26];
        Stack<Integer> st = new Stack();
        for(int i=0; i<s.length(); i++){
            int curr = s.charAt(i) - 'a';
            if(seen[curr]) continue;
            while(!st.empty() && st.peek() > curr && i < lastIndex[st.peek()]){
                seen[st.pop()] = false;
            }
            st.push(curr);
            seen[curr] = true;
        } 
        while (!st.isEmpty())
            sb.append((char) (st.pop() + 'a'));
        
        return sb.reverse().toString();
    }
}
*/