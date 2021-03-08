// var minSubArrayLen = function (target, nums) {
//     let res = nums.length;

//     for (let i = 0; i < nums.length; i++) {
//         let tmp = nums[i];
//         for (let j = i + 1; j < nums.length; j++) {
//             tmp += nums[j];
//             if (tmp >= target) {
//                 console.log(i, j)
//                 res = Math.min(j - i + 1, res);
//                 break;
//             }
//         }
//     }
//     return res;
// };
// var minSubArrayLen = function (target, nums) {
//     let res = nums.length;

//     let flag = false;
//     for (let i = 0; i < nums.length; i++) {
//         // let tmp = nums[i];
//         let tmp = 0;
//         for (let j = i; j < nums.length; j++) {
//             tmp += nums[j];
//             if (tmp >= target) {
//                 flag = true;
//                 console.log(i, j)
//                 res = Math.min(j - i + 1, res);
//                 break;
//             }
//         }
//     }
//     return flag ? res : 0;
// };




var minSubArrayLen = function (target, nums) {
    let res = nums.length + 1;
    let left = 0;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        while (sum >= target) {
            sum -= nums[left];
            res = Math.min(res, i - left + 1)
            left++;
        }
    }
    return res === nums.length + 1 ? 0 : res;
};

let target = 11, nums = [1, 1, 1, 1, 1, 1, 1, 1];
const res = minSubArrayLen(target, nums);
console.log(res);
