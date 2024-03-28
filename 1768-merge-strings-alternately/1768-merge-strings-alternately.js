/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const split1 = word1.split('');
    const split2 = word2.split('');
    
    let merged = '';
    let i = 0, j = 0;
    
    while (i < split1.length && j < split2.length) {
        merged += split1[i++] + split2[j++];
    }
    
    while (i < split1.length) {
        merged += split1[i++];
    }
    
    while (j < split2.length) {
        merged += split2[j++];
    }
    
    return merged;
};

