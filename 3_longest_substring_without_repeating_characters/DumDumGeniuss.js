/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let currentLongest = '';
  let cursor = 0;
  let curSub = ''; 
  let curSubSize =curSub.length;
  let curSubMap = {};
  let nextChar = '';
  let totalSize = s.length;
  
  while (cursor + curSubSize < totalSize) {
  	nextChar = s.substring(cursor + curSubSize, cursor + curSubSize + 1);
  	if (curSubMap[nextChar]) {
  		var repeatCharIndex = curSub.indexOf(nextChar);
  		cursor += repeatCharIndex + 1;
  		if (curSubSize > currentLongest.length) {
  			currentLongest = curSub;
  		}
  		for (var i = 0; i < repeatCharIndex; i++) {
  			delete curSubMap[curSub.substring(i, i + 1)];
  		}
  		curSub = curSub.substring(repeatCharIndex + 1, curSubSize) + nextChar;
  		curSubSize = curSub.length;
  	} else {
  		curSub += nextChar;
  		curSubSize += 1;
  		curSubMap[nextChar] = true;
  	}
  }
  if (curSubSize > currentLongest.length) {
  	currentLongest = curSub;
  }
  return currentLongest.length;
};


console.log(lengthOfLongestSubstring('adsfdsaf'));
console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));