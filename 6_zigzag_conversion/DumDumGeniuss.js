/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
	if (numRows === 0) {
		return '';
	}
	if (numRows === 1) {
		return s;
	}
	const setSize = numRows * 2 - 2;
	const sSize = s.length;
	const alphs = s.split('');
	let res = '';
	for(let i = 0; i < numRows; i++) {
		if (i === 0 || i === numRows - 1) {
			for(let j = i; j < sSize; j += setSize) {
				res += alphs[j];
			}
		} else {
			for (let j = i; j < sSize; j += setSize) {
				res += alphs[j];
				if (j + (numRows - i - 1) * 2 < sSize) {
					res += alphs[j + (numRows - i - 1) * 2];
				}
			}
		}
	}
	return res;
};



console.log(convert("PAYPALISHIRING", 1) === 'PAYPALISHIRING');
console.log(convert("PAYPALISHIRING", 3) === 'PAHNAPLSIIGYIR');
console.log(convert("PAYPALISHIRING", 0) === '');
console.log(convert('', 1) === '');