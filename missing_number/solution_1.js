/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var expectedLen = nums.length+1;
    var expectedSum = ( ( 0 + expectedLen-1 ) * expectedLen ) / 2;
    var sum = 0;
    
    for(var i in nums) {
        sum += nums[i];
    }
    return expectedSum - sum;
};

//test cases

console.log( 2 === missingNumber( [ 0, 1, 3 ] ) );
console.log( 4 === missingNumber( [ 5, 3, 2, 1, 0 ] ) );