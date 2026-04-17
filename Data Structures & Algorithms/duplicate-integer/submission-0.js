class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const holder = {}
        for(let num of nums){
            if(holder[num]) return true;
            else holder[num] = true;
        }
        return false
    }
}
