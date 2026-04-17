class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i = 0; i < 9; i++) {
            const row = {};
            const column = {};
            const square = {};

            for (let j = 0; j < 9; j++) {
                // Check Row i
                const valRow = board[i][j];
                if (valRow !== ".") {
                    if (row[valRow]) return false;
                    row[valRow] = true;
                }

                // Check Column i
                const valCol = board[j][i];
                if (valCol !== ".") {
                    if (column[valCol]) return false;
                    column[valCol] = true;
                }

                // Check Square i
                const rowIndex = 3 * Math.floor(i / 3) + Math.floor(j / 3);
                const colIndex = 3 * (i % 3) + (j % 3);
                const valSquare = board[rowIndex][colIndex];

                if (valSquare !== ".") {
                    if (square[valSquare]) return false;
                    square[valSquare] = true;
                }
            }
        }
        return true;
    }
}
