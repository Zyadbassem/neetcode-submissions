class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) 
    {
       let left = 0;
       let right = 1;
       let max = -Infinity;

       while(right < prices.length)
       {
         let curr = prices[right] - prices[left];
         max = Math.max(max, curr)

         if (prices[left] > prices[right])
         {
            left = right;
         }
        right++;
       }

       return Math.max(max, 0)
    }
}
