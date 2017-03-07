/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
	const [m, n] = [nums1.length, nums2.length];
	if ( (m + n) % 2 === 1) {
		return getKthNumber(nums1, m, nums2, n, parseInt((m + n) / 2) + 1);
	}  else {
		return getKthNumber(nums1, m, nums2, n, (m + n) / 2) / 2
			+ getKthNumber(nums1, m, nums2, n, (m + n) / 2 + 1) / 2;
	}
};

function getKthNumber (nums1, m, nums2, n, k) {
	if (m > n) {
		return getKthNumber(nums2, n, nums1, m, k);
	}
	if (m === 0) {
		return nums2[k -1];
	}
	if (k === 1) {
		return nums1[0] >= nums2[0] ? nums2[0] : nums1[0];
	}

	let target1 = parseInt(m > k / 2 ? k / 2 : m, 10);
	let target2 = k - target1;
	if (nums1[target1 - 1] < nums2[target2 - 1]) {
		nums1 = nums1.slice(target1, m);
		return getKthNumber(nums1, m - target1, nums2, n, k - target1);
	} else if (nums1[target1 - 1] > nums2[target2 - 1]) {
		nums2 = nums2.slice(target2, n);
		return getKthNumber(nums1, m, nums2, n - target2, k - target2)
	} else {
		return nums1[target1 - 1];
	}
}

const nums1 = [1, 3, 4, 7, 12, 18];
const nums2 = [1, 6, 7, 9];
console.log(findMedianSortedArrays(nums1, nums2) === 6.5);

const nums3 = [0,4];
const nums4 = [3];
console.log(findMedianSortedArrays(nums3, nums4) === 3);

const nums5 = [];
const nums6 = [1];
console.log(findMedianSortedArrays(nums5, nums6) === 1);