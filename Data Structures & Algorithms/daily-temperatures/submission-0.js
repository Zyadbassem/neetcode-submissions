class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = []

        for(let i = 0; i < temperatures.length; i++)
        {
            let currentTemp = temperatures[i]
            let transferred = false

            for(let j = i + 1; j < temperatures.length; j++)
            {
                let nextTemp = temperatures[j]

                if(nextTemp > currentTemp) 
                {
                    stack.push(j-i)
                    transferred = true
                    break;
                }
            }

            if(!transferred) stack.push(0)
        }

        return stack
    }
}
