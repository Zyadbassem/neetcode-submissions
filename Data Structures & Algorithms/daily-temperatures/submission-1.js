class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = []
        let result = new Array(temperatures.length).fill(0)

        for(let i = 0; i < temperatures.length; i++)
        {
            let current = temperatures[i]
            
            while(stack.length > 0 && current > temperatures[stack[stack.length - 1]])
            {
                const index = stack.pop();
                const value = i - index;
                result[index] = value
            }
            stack.push(i)
        }

        return result
    }
}
