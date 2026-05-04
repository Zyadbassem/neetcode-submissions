class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) 
    {
        let sorted = this.merge(nums1, nums2);
        console.log(sorted)
        
        if(sorted.length % 2 === 0)
        {
         let index = Math.floor((sorted.length - 1) / 2);
         let f = sorted[index];
         let s = sorted[index+1];

         return (f+s) / 2;
        }
        else
        {
            return sorted[(sorted.length - 1) / 2];
        }
    }

    merge(nums1, nums2)
    {
        let i = 0;
        let k = 0;

        let output = []

        while(i<nums1.length && k < nums2.length)
        {
            if(nums1[i] < nums2[k])
            {
                output.push(nums1[i])
                i++;
            }
            else 
            {
                output.push(nums2[k]);
                k++
            }
        }

        return [...output, ...nums1.slice(i), ...nums2.slice(k)]
    }
}
