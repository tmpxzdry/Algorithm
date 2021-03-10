var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return ''
    }
    let minLen = strs[0].length;
    let short = strs[0]
    strs.forEach(el => {
        if (el.length < minLen) {
            minLen = el.length
            short = el;
        }
    })
    let suff = ''
    for (let j = 0; j < minLen; j++) {
        let first = short[j]
        for (let i = 0; i < strs.length; i++) {
            if (strs[i][j] !== first) {
                return suff
            }
        }
        suff += first;
    }
    return suff

};

let strs = ["dog", "racecar", "car"]
console.log(longestCommonPrefix(strs))