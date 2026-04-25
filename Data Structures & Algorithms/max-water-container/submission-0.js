class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) 
    {
        let left = 0;
        let right = heights.length - 1;
        let currentMax = -Infinity;

        while(left < right)
        {
            let width = right-left;
            let height = Math.min(heights[left], heights[right])
            
            let currentA = width * height;

            if(currentMax < currentA) currentMax = currentA;

            if(heights[left] < heights[right]) left++;
           else if (heights[left] >= heights[right]) right--;
        }

        return currentMax
    }
}
