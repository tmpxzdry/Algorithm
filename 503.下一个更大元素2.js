var nextGreaterElements = function (nums) {
    let n = nums.length
    let res = new Array(n).fill(-1);
    let stack = []


    for (let i = 0; i < 2 * n - 1; i++) {
        if (stack.length === 0) {
            stack.push(i % n)
            continue
        }
        let top = stack[stack.length - 1]
        while (nums[i % n] > nums[top] && stack.length) {
            let el = stack.pop();
            res[el] = nums[i % n]
            top = stack[stack.length - 1]
        }
        stack.push(i % n);
    }
    return res;
};
console.log(nextGreaterElements([1, 2, 1]))