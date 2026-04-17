class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) 
    {
        let total = 1;
        let numOfZeroes = 0;

        for(let num of nums)
        {
            if(num !== 0) total *= num;
            else numOfZeroes++;
        }

        let output = []
        for(let i = 0; i < nums.length; i++)
        {
            if(numOfZeroes >= 1)
            {
                if(numOfZeroes >= 2)
                {
                    output[i] = 0;
                }
                else 
                {
                    if(nums[i] === 0) output[i] = total;
                    else output[i] = 0;
                }
            }

            else output[i] = total / nums[i]
            
        }

        return output
    }
}
