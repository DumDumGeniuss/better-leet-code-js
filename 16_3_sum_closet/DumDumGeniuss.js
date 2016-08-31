/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort(function(a, b){return a-b});
    var bestSum = nums[0] + nums[1] + nums[2];
    
    for(var i = 0; i < nums.length; i++) {
        var start = i+1,
            end = nums.length - 1,
            newSum;
        while(start < end) {
            newSum = nums[i] + nums[start] + nums[end];
            if(Math.abs(newSum - target) < Math.abs(bestSum - target)) {
                bestSum = newSum;
            }
            if(newSum === target) {
                return newSum;   
            }else if(newSum < target) {
                start++;
            } else {
                end--;
            }
        }
    }
    return bestSum;
};

console.log(threeSumClosest([0, 1, 2], 0) === 3);
console.log(threeSumClosest([0, 1, 2, 9], 20) === 12);
console.log(threeSumClosest([0, 7, 2, -18, 46], 20) === 28);
console.log(threeSumClosest([0, 1, 2, 7], 8) === 8);
