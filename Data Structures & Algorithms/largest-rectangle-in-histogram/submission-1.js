class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
    let maxArea = 0;

    for (let i = 0; i < heights.length; i++) {
        let right = i + 1;
        let left = i - 1;

        // Find the first bar to the right that is shorter
        while (right < heights.length && heights[right] >= heights[i]) {
            right++;
        }
        // Find the first bar to the left that is shorter
        while (left >= 0 && heights[left] >= heights[i]) {
            left--;
        }

        // The rectangle spans from (left + 1) to (right - 1)
        const width = right - left - 1;
        const currentArea = heights[i] * width;

        maxArea = Math.max(maxArea, currentArea);
    }

    return maxArea;
}
}

//We are going to have a monotonic stack
// for loop 
//      if stack is empty or the area of current is greater than the area at top
//          push current area to stack 

// return the top stack element