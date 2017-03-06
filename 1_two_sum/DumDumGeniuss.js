/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	const maps = {};
	const nums_size = nums.length;
	const result = [];
	for (let i = 0; i < nums.length; i++) {
		maps[nums[i]] = i;
	}

	for (let i = 0; i < nums.length; i++) {
		let sub_target = target - nums[i];
		if (maps[sub_target]) {
			result.push(i, maps[sub_target]);
			break;
		}
	}

	result.sort();
	return result;
};

const output_1 = twoSum([1, 2, 3, 9], 12);
console.log(output_1[0] === 2 && output_1[1] === 3);



