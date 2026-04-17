class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        /**
         * Map = {
         *  nextNumber: previousSequinceCount
         * }
         */

        if(nums.length <= 1) return nums.length;


        const mySet = new Set(nums)
        let max = 1
        for(let num of mySet)
        {
            if(!mySet.has(num-1))
            {
                let counter = 1;
                let holder = num+1;

                while(mySet.has(holder))
                {
                    counter++;
                    holder++;
                }

                if(max < counter) max = counter;
            }
        }

        return max
        
    }
}
