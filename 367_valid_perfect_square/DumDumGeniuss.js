/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
	var left = 1,
		right = num,
		mid,
		temp;
	while(left <= right) {
		mid = parseInt((left + right)/2, 10);
		temp = mid*mid;
		if(temp === num) {
			return true;
		} else if(temp > num) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}
	return false;
};

console.log(isPerfectSquare(17) === false);
console.log(isPerfectSquare(16) === true);
console.log(isPerfectSquare(31) === false);
console.log(isPerfectSquare(40000) === true);