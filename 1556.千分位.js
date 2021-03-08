var thousandSeparator = function (n) {
    let count = 0;
    let str = ""

    do {
        ++count;
        str += (n % 10).toString()
        n = Math.floor(n / 10);
        if (count % 3 === 0 && n) {
            str += '.'
        }
    } while (n)
    return str.split('').reverse().join('')
};

/**
 * 
 * 使用正则的(?!)和(?=)
 * (?!l)表示匹配除了l前面之外的位置，比如'hello'.replace(/(?!l)/g,"#") // #h#ell#o#
 * (?=l)表示匹配l前面的位置，hello.replace(/(?=l)/g,"#") // he#l#lo
 * 所以，要匹配每三个数组一组的前面的位置，且这三个数组要是结尾的3个数字，/(?=(\d{3})+$)/
 * 且不能匹配开头，/(?!^)(?=(\d{3})+$)/
 * 其中,(?!^)不为开头可以用\B(匹配不是单词边界的地方“er\B”能匹配“verb”中的“er”，但不能匹配“never”中的“er”。)
 * 最后的表示结尾$可以用(?\d)来代替(目前还没搞懂为什么，猜测匹配不是单个数字前后方？)
 * 
 */
var thousandSeparator1 = function (n) {
    return n.toString().replace(/(?!^)(?=(\d{3})+$)/g, ".")
};