class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let holder = {};

        for(let i = 0; i < nums.length; i++){
            let wanted = target - nums[i];
            if(holder[wanted] !== undefined)
            {
                return [holder[wanted], i];
            }
            else 
            {
                holder[nums[i]] = i;
            }
        }
    }
}
