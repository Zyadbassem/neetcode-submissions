class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) 
    {
        let left = 0;
        let right = nums.length - 1;

        while(left < right) 
        {
            let mid = Math.floor((left+right) / 2);
            if(nums[mid] > nums[right])
            {
                left = mid + 1;
            }
            else 
            {
                right = mid;
            }
        }
       
       return Math.max(this.helper(nums, 0, right-1, target), this.helper(nums, right, nums.length - 1, target))
    }

    helper(nums, l, r, target) 
    {
        while(l<=r)
        {
            let mid = Math.floor((l + r) / 2)
            if(nums[mid] == target) return mid;
            else if (nums[mid] > target) r = mid - 1;
            else  l = mid + 1;
        }
        return -1
    }
}
