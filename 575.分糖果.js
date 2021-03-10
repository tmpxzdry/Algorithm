var distributeCandies = function (candyType) {
    let arr = Array.from(new Set(candyType)).sort();
    let len = candyType.length;
    let moreLen = arr.length - len / 2
    let start = moreLen >= 0 ? moreLen : 0
    return arr.length - start
};

/**
 * 首先，sort是完全没必要的，只是思考，最后发现不用反馈具体数组，只用返回种类数目。因此不用排序
 * 去掉sort，时间立马提升了一倍之多，从300ms左右变成了150ms左右。可见排序是很占时间的
 * 
 * 其次，通过查看优秀答案，发现set有个size属性，所以这里的from完全不必要，改用size
 * 
 * 最后，发现妹妹要么分到原数组的一半(去重后多余原数组一半)，要么去重后不足一半，就全分到(种类)，所以可以
 * 所以可以直接比较去重后的size和原数组长度一半的大小
 * 
 * 上面三种渐进的思考，时间上差不多，形式上越来越简洁
 */
var distributeCandies = function (candyType) {
    let size = new Set(candyType).size;
    return Math.min(size, candyType.length / 2)
};

let candies = [1, 1, 1, 1]
console.log(distributeCandies(candies))