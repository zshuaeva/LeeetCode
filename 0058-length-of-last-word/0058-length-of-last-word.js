/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();

    let lastSpaceIndex = s.lastIndexOf(' ');

    if (lastSpaceIndex === -1) {
        return s.length;
    }
    
    return s.length - lastSpaceIndex - 1;
};

