/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
	let sum = 0;
	for (let i = 0; i < grid.length; i++) {
		let size_1 = grid.length;
		for (let j = 0; j < grid[i].length; j++) {
			let size_2 = grid[i].length;
			if (grid[i][j] === 1) {
				if ((i === 0) || (i > 0 && grid[i - 1][j] === 0)) {
					sum += 1;
				}
				if ((j === size_2 - 1) || (j < size_2 - 1 && grid[i][j + 1] === 0)) {
					sum += 1;
				}
				if ((i === size_1 - 1) || (i < size_1 - 1 && grid[i + 1][j] === 0)) {
					sum += 1;
				}
				if ((j === 0) || (j > 0 && grid[i][j - 1] === 0)) {
					sum += 1;
				}
			}
		}
	}
	return sum;
};

let testValue = [
	[0,1,0,0],
	[1,1,1,0],
	[0,1,0,0],
	[1,1,0,0]
];

let testValue2 = [[1,0]]

console.log(islandPerimeter(testValue) === 16);
console.log(islandPerimeter(testValue2) === 4);