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


var nextGreaterElements1 = function (nums) {
    let n = nums.length;
    let stack = [];
    let res = new Array(n).fill(-1)

    for (let i = 0; i < 2 * n - 1; i++) {
        while ((nums[i % n] > nums[stack[stack.length - 1]]) && stack.length !== 0) {
            console.log(stack)
            res[stack[stack.length - 1]] = nums[i % n]
            stack.pop();
        }
        stack.push(i % n)
    }
    return res;
};

console.log(nextGreaterElements1([1, 2, 1]))