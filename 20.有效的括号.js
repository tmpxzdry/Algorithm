let hash = {
    '(': ')',
    '{': '}',
    '[': ']',
}

var isValid = function (s) {
    if (s.length % 2 !== 0) {
        return false
    }
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (stack.length === 0) {
            stack.push(s[i]);
            continue
        }

        if (hash[stack[stack.length - 1]] === s[i]) {
            stack.pop();
            continue
        }
        if (!hash[s[i]]) {
            return false
        }
        stack.push(s[i])
    }
    return !stack.length
};

let s1 = "()"
let s2 = "()[]{}"
let s3 = "(]}}}}}}"
let s4 = "([)]"
let s5 = "{[]}"
let res = isValid(s3);
console.log(res)


