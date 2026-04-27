class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) 
    {

      let area = 0;
      let maxLeft = Array(height.length);
      let maxRight = Array(height.length);
      maxLeft[0] = height[0];
      maxRight[height.length - 1] = height[height.length - 1];

      for(let i = 1; i < height.length; i++)
      {
        let prev = maxLeft[i-1]
        maxLeft[i] = Math.max(height[i], prev);
      }

      for(let i = height.length-2; i>= 0; i--)
      {
        let prev = maxRight[i+1]
        maxRight[i] = Math.max(height[i], prev);
      }
      
      for(let i = 0; i < height.length; i++)
      {
        if(i === 0 || i === height.length - 1) continue

        let greaterLeft = maxLeft[i];
        let greaterRight = maxRight[i];

        let curr = Math.max(Math.min(greaterLeft, greaterRight) - height[i], 0)
        area+=curr
      }

      return area
      

    }
}
