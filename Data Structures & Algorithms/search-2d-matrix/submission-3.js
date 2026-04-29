class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) 
    {
        let left = 0;
        let right = matrix.length - 1;
        let picker = -1
        while(left <= right)
        {
            let mid = Math.floor((left+right) / 2)
            if(matrix[mid][0] <= target && matrix[mid][matrix[mid].length - 1] >= target)
            {
                picker = mid;
                break
            } else if (matrix[mid][0] > target) right = mid -1;
            else left = mid + 1;
        }
        if(picker == -1) return false
        left = 0;
        right = matrix[picker].length - 1;

        console.log(matrix[picker], picker, left, right)

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
