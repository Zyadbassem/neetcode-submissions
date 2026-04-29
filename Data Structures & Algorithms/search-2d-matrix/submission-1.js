class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) 
    {
        let picker = 0;
        while(picker < matrix.length - 1)
        {
            if(matrix[picker][(matrix[picker].length - 1)] >= target) break;
            else picker++;
        }

        let left = 0;
        let right = matrix[picker].length - 1;

        while(left <= right)
        {
            let mid = Math.floor((left+right) / 2)
            if(matrix[picker][mid] === target) return true;
            else if(matrix[picker][mid] > target) right = mid - 1;
            else left = mid + 1;
        }

        return false
    }
}
