/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
	let newTringle = JSON.parse(JSON.stringify(triangle));
	for (let i = newTringle.length - 2; i >= 0; i--) {
		for (let j = 0; j < newTringle[i].length; j++) {
			newTringle[i][j] += (newTringle[i + 1][j]<newTringle[i + 1][j+1])?newTringle[i + 1][j]:newTringle[i + 1][j+1];
		}
	}
	return newTringle[0][0];
};


let triangle = [
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
];

let triangle2 = [
     [2],
    [3,4],
   [6,5,7],
  [4,1,-8,3]
];

console.log(minimumTotal(triangle) === 11);
console.log(minimumTotal(triangle2) === 2);