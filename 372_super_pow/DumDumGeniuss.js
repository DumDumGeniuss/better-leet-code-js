/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {
	var res = 1;
	a = a % 1337;

	for(var i = b.length - 1; i >= 0; i--) {
		res = res * powAndMod(a, b[i], 1337) % 1337;
		a = powAndMod(a, 10, 1337) % 1337;

	}
	return res;
};

var powAndMod = function(num, pow, mod) {
	var res = 1;
	for(var i = 0; i < pow; i++) {
		res = res * num % mod;
	}
	return res;
};

console.log( superPow(3, [1,2,3]) === 517 );
console.log( superPow(123, [1,2,3]) === 617 );

