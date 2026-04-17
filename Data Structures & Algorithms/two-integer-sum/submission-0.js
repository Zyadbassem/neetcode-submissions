class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let holder = {}
        for(let i = 0; i < nums.length; i++){
            const currNum = nums[i]

            if (holder[target - currNum] !== undefined){
                return [holder[(target - currNum)], i]
            } 
            else
            {
                holder[currNum] = i
            }
        }

        return [0, 1]
    }
}
