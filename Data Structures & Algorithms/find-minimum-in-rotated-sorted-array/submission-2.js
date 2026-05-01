class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) 
    {
        let l = 0;
        let r = nums.length - 1;

        while(l<r)
        {
                
            let mid = Math.floor((l+r) / 2);
            if (nums[mid] > nums[r]) {
                // The "cliff" is to the right; mid is too big.
                l = mid + 1;
            } else {
                // mid could be the minimum, or it's to the left.
                r = mid;
            }
            
        }
       
       console.log(l, r)

       return nums[l]
    }
}

// [9, 8, 10, 12, 29, 0, 1, 5, 7]