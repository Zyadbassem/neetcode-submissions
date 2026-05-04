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
       
       let l1 = 0;
       let r1 = right;

       let l2 = right;
       let r2 = nums.length - 1;

       while(l1 <= r1)
       {
        let mid = Math.floor((l1 + r1) / 2);

        if(nums[mid] == target) return mid;
        else if (nums[mid] > target) r1 = mid - 1;
        else  l1 = mid + 1;
       }

       while(l2 <= r2)
       {
        let mid = Math.floor((l2 + r2) / 2)
        if(nums[mid] == target) return mid;
        else if (nums[mid] > target) r2 = mid - 1;
        else  l2 = mid + 1;
       }


       return -1
    }
}
