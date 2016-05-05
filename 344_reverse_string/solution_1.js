/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var res = "";
    for(var i in s){
        res = s[i] + res;
    }
    return res;
};


//test case

console.log("olleh" === reverseString("hello"));