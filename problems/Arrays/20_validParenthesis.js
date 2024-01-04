


function isValid(str) {
    let stack = [];
    for(let s of str) {
        if(s == '(') stack.push(')');
        else if(s == "{") stack.push('}');
        else if(s == "[") stack.push("]");
        else if(stack.length == 0 || stack.pop() != s)
            return false;
    }
    return stack.length == 0;

}

console.log(isValid("(]"))