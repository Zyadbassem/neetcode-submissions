class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        let output = []

        for(let i = 0; i < nums.length; i++)
        {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            let target = -1 * nums[i];

            let left = i+1;
            let right = nums.length - 1;

            while(left < right)
            {
                let current = nums[left] + nums[right];

                if(current === target)
                {
                    output.push([nums[left], nums[right], nums[i]])
                    while (nums[left] === nums[left + 1]) left++;
                    while (nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                }
                else if (current > target) right--;
                else if (current < target) left++;
                   
            }
            

        }


        

        return output
    }
}
