/**
 * 
 * @param {*} x 
 * 
 * 此方法使用了很多api，拆成字符串之后反转在通过join在一起
 * 这种方式其实不太好，一是调用太多api，二十算法复杂度不够透明
 * 
 */
var reverse = function (x) {
    let rev;
    if (x > 0) {
        rev = x.toString().split("").reverse().join("")
    } else {
        rev = -Math.abs(x).toString().split("").reverse().join("")
    }
    if (rev <= -2147483648 || rev >= 2147483647 || rev === 0) {
        return 0
    }
    return rev;
};

let x = 1534236469;
let res = reverse(x);
console.log(res)


/**
 * @param {number} x
 * @return {number}
 * 
 * 通过整除反转的方法
 * 这种方式是比较推荐的
 * 
 */
var reverse = function (x) {
    let abs = Math.abs(x);
    let r = 0;

    while (abs > 0) {
        r = r * 10 + abs % 10;
        abs = Math.floor(abs / 10);
    }

    if (x > 0) {
        return r >= -Math.pow(2, 31) && r <= Math.pow(2, 31) - 1 ? r : 0
    } else {
        return r >= -Math.pow(2, 31) && r <= Math.pow(2, 31) - 1 ? -r : 0
    }

};
