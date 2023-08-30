/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = new Array(9).fill(0).map(() => new Array(9).fill(false));
    const cols = new Array(9).fill(0).map(() => new Array(9).fill(false));
    const boxes = new Array(9).fill(0).map(() => new Array(9).fill(false));
    
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                const num = parseInt(board[i][j]) - 1;
                const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                if (rows[i][num] || cols[j][num] || boxes[boxIndex][num]) {
                    return false;
                }

                rows[i][num] = cols[j][num] = boxes[boxIndex][num] = true;
            }
        }
    }
    
    return true;
};
