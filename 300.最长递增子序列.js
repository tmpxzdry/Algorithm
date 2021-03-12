var lengthOfLIS = function (nums) {

    let cur = 0;
    let count = 0;
    let res = []
    for (let i = 0; i < nums.length - 1; i++) {
        cur = nums[i]
        count = 1;
        for (let j = i + 1; j < nums.length; j++) {
            if (cur < nums[j]) {
                count++;
                cur = nums[j];
            }
        }
        res.push(count)
    }
    console.log(res)
    return Math.max(...res)
};
let arr1 = [10, 9, 2, 5, 3, 7, 101, 18]
let arr2 = [0, 1, 0, 3, 2, 3]
let arr3 = [7, 7, 7, 7, 7, 7, 7]
let arr = [4, 10, 4, 3, 8, 9]
let res = lengthOfLIS(arr2);
console.log(res)