
let hash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

var romanToInt = function (s) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        res += hash[s[i]]
        if (s[i] === 'V' || s[i] === 'X') {
            if (i - 1 >= 0 && s[i - 1] == 'I') {
                res -= 2
            }
        }
        if (s[i] === 'L' || s[i] === 'C') {
            if (i - 1 >= 0 && s[i - 1] == 'X') {
                res -= 20
            }
        }
        if (s[i] === 'M' || s[i] === 'D') {
            if (i - 1 >= 0 && s[i - 1] == 'C') {
                res -= 200
            }
        }
    }

    return res;
};

/**
 * 
 * @param {*} s 
 * @returns 
 * 首先这题不需要split字符串，字符串直接就可以用作数组
 * 第二这题我想到了如果当前不为I，那么就判断当前和前一个的商，是否为5或10
 * 如果是，就把去掉两次。其实这里只需要prev<cur就可以了。具体看最下面的做法
 * 这题时间差距不大，还是蛮简单的
 * 
 */
var romanToInt2 = function (s) {
    let res = hash[s[0]]
    for (let i = 1; i < s.length; i++) {
        res += hash[s[i]]
        if (s[i] !== 'I') {
            let prev = hash[s[i - 1]];
            let cur = hash[s[i]];
            if (cur / prev === 5 || cur / prev === 10) { // 只需要prev<cur
                let next = i + 1 === s.length ? 0 : hash[s[i + 1]]
                res -= 2 * prev - next
                i = i + 1;
            }
        }
    }

    return res;
};

/**
 * 
 * @param {*} s 
 * @returns 
 * 这是最简洁的一种做法，没想到，观察力还是不行
 * 首先可以发现，罗马数的排列规则，除去列出的特殊情况，大数一定是在小的数前面的
 * 因此，所有小的数在大的数前面的，都应该是符合规则的
 * 比如，IVX，IIIV是不对的，应该写成XIV,IVII
 * 因此，只需要判断当前元素和下一个元素的大小关系，如果是小，就减去当前元素。大就加上当前元素
 * 
 */
var romanToInt = function (s) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        console.log(hash[s[i + 1]])
        hash[s[i]] < hash[s[i + 1]] ? res -= hash[s[i]] : res += hash[s[i]]
    }
    return res;
};

let s = "IVX"
console.log(romanToInt(s))