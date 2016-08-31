/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort(function(a, b) {return a-b;});
    result = [];
    checkMap = {};
    
    for(var i = 0; i < nums.length; i++) {
        var start = i + 1,
            end = nums.length - 1,
            sum;
        while(start < end) {
            sum = nums[i] + nums[start] + nums[end];
            if(sum === 0) {
                var newArray = [nums[i], nums[start], nums[end]];
                if(!checkMap[newArray]) {
                    result.push(newArray);
                    checkMap[newArray] = true;
                }
            }
            if(sum > 0) {
                while(end > start && nums[end] === nums[end -1]) {
                    end--;
                }
                end--;
            } else {
                while(start < end && nums[start] === nums[start + 1]) {
                    start++;
                }
                start++;
            }
        }
    }
    return result;
};


console.log(threeSum([-1,0,1,2,-1,-4]));
