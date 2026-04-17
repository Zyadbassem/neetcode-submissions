class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const holder = {};
        for(let num of nums) 
        {
            if(holder[num]) holder[num]++;
            else holder[num] = 1;
        }

        let output = []
        for(let i = 0; i < k; i++)
        {
            let mostFreq = undefined
            for(let num in holder)
            {
                if(mostFreq === undefined || holder[mostFreq] < holder[num])
                {
                    mostFreq = num;
                }
            }
            holder[mostFreq] = 0;
            output.push(mostFreq)
        }
        
        return output
    }
}
