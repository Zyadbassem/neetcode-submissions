class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0;
        let j = numbers.length - 1;

        while(i < j)
        {
            let current = numbers[j] + numbers[i];

            if(current > target) j--;
            else if(current < target) i++;
            else if(current === target) return [i + 1, j + 1];
        }
    }
}
