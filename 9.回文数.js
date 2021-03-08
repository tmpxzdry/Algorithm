/**
 * 
 * @param {*} x 
 * 点评：这一题在做完整数反转(7)之后，是比较简单的，因为不用考虑x为负的情况(直接false)
 * 只需要和整数反转一样计算出x反转之后的结果，然后和x对比是否相等即可
 * 
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false
    }
    if (x === 0) {
        return true
    }

    let t = x;
    let r = 0;
    while (t > 0) {
        r = r * 10 + t % 10;
        t = Math.floor(t / 10)
    }
    if (r === x) {
        return true
    }
    return false;
};