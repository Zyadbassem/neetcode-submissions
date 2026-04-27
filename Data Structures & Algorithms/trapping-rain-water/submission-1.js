class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) 
    {

      let area = 0;

      for(let i = 0; i < height.length; i++)
      {
        if(i === 0 || i === height.length - 1) continue;

        let greaterLeft = -Infinity;
        let greaterRight = -Infinity;

        for(let j = i - 1; j >= 0; j--)
        {
            if (height[j] > greaterLeft) greaterLeft = height[j];
        }

        for (let k = i + 1; k < height.length; k++)
        {
            if(height[k] > greaterRight) greaterRight = height[k];
        }

        let curr = Math.max(Math.min(greaterLeft, greaterRight) - height[i], 0)
        area+=curr


      }

      return area
      

    }
}
