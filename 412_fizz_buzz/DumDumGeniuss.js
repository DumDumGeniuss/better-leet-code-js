/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
	let [res, string] = [[], ''];
	for (let i = 0; i < n; i++) {
		string = '';
		if ((i + 1) % 3 ===0) {
			string += 'Fizz';
		}
		if ((i + 1) % 5 ===0) {
			string += 'Buzz';
		}
		if (string.length===0) {
			string = '' + (i + 1);
		}
		res.push(string);
	}
	return res;
};

let output = [
	'1',
	'2',
	'Fizz',
	'4',
	'Buzz',
	'Fizz',
	'7',
	'8',
	'Fizz',
	'Buzz',
	'11',
	'Fizz',
	'13',
	'14',
	'FizzBuzz'
];

console.log(fizzBuzz(15)[2] === 'Fizz');
console.log(fizzBuzz(15)[5] === 'Fizz');
console.log(fizzBuzz(15)[8] === 'Fizz');
console.log(fizzBuzz(15)[14] === 'FizzBuzz');
