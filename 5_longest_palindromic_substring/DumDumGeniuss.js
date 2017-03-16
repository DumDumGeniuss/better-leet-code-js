/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
	const length = s.length;
	let lonestPal = '';
	for (let i = 0; i < length; i++) {
		let newPal_1 = getPalindrome(s, i, i);
		let	newPal_2 = getPalindrome(s, i, i+1);
		if (newPal_1.length > lonestPal.length) {
			lonestPal = newPal_1;
		}
		if (newPal_2.length > lonestPal.length) {
			lonestPal = newPal_2;
		}
	}
	return lonestPal;
};

function getPalindrome(t_string, s_idx, e_idx) {
	const length = t_string.length;
	while (s_idx >= 0 && e_idx < length && getCharcater(t_string, s_idx) === getCharcater(t_string, e_idx)) {
		s_idx -= 1;
		e_idx += 1;
	}
	return t_string.substring(s_idx + 1, e_idx);
}

function getCharcater(string, index) {
	return string.substring(index, index + 1);
}

console.log(longestPalindrome('eeeeeeeeed') === 'eeeeeeeee');
console.log(longestPalindrome('eewxxweeg') === 'eewxxwee');
console.log(longestPalindrome('cbbd') === 'bb');
console.log(longestPalindrome('babad') === 'bab');
console.log(longestPalindrome('') === '');