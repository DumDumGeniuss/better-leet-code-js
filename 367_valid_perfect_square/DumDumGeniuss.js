/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
	return Math.sqrt(num)%1 === 0;
};

console.log(isPerfectSquare(17) === false);
console.log(isPerfectSquare(16) === true);
console.log(isPerfectSquare(31) === false);
console.log(isPerfectSquare(40000) === true);