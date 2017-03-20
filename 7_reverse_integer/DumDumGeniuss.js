/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x === 0) {
        return 0;
    }
    const sign = x >= 0 ? '' : '-';
    x = x >= 0 ? x : -x;
    let reverse = '';
    while (x >= 1) {
        reverse += (x % 10);
        x = parseInt(x / 10, 10);
    } 
    if (reverse.length === 10) {
        if (parseInt(reverse.substring(0, 1), 10) > 2) {
            reverse = '0';
        } else if (parseInt(reverse.substring(1, 10), 10) > 147483648) {
            reverse = '0';
        }
    }
    return parseInt(sign + reverse, 10);
};


console.log(reverse(10) === 1);
console.log(reverse(-10) === -1);
console.log(reverse(-123) === -321);
console.log(reverse(1000000003) === 0);
console.log(reverse(8463847412) === 2147483648);
console.log(reverse(8463847422) === 0);