// var twoSum = function (nums, target) {
//     let obj = {}

//     for (let i = 0; i < nums.length; i++) {
//         console.log(obj)

//         if (!obj.hasOwnProperty(target - nums[i])) {
//             obj[nums[i]] = i;
//         } else {
//             return [obj[target - nums[i]], i]
//         }
//     }
// };

/**
 * 暴力算法，双循环，每一个数都循环匹配一遍
 * O(n^2)
 * 
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (target === nums[i] + nums[j]) {
                return [i, j]
            }
        }
    }
};

/**
 * 
 * 使用Map,建立x对应target-x的哈希表，使得寻找target-x的时间复杂度变为O(1)
 * 复杂度O(n)
 * 
 */
var twoSum1 = function (nums, target) {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i]
        }
        map.set(nums[i], i)
    }
};

/**
 * 点评：测评结果差距不明显，和测试用例过小应该有一定原因
 * 实测下方大数组，一个15ms，一个10s。差距还是很明显的
 */

let nums = new Array(100000).fill(0);
nums[100001] = 3;
nums[100002] = 3;
console.time();
target = 6
let res = twoSum(nums, target);
console.log(res)
console.timeEnd()