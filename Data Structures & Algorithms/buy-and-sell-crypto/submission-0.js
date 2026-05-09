class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) 
    {
        let max = -Infinity;

        for(let i = 0; i < prices.length - 1; i++)
        {
            for(let j = i+1; j < prices.length; j++)
            {
                max = Math.max((prices[j] - prices[i]), max)
            }
        }

        return Math.max(0, max);
    }
}
