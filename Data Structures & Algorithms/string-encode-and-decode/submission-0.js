class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";
        for(let str of strs)
        {
            let counter = 0;
            for(let char of str)
            {
                counter++;
            }
            encoded += `${counter}#${str}`
        }
        
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    // "3#hey4#zezo8#elmystro"
   
    decode(str) 
    {
        let strs = []
        let pointer = 0;

        while(pointer < str.length)
        {
            let current = pointer;
            while(str[pointer] !== "#" && pointer < str.length)  pointer++;

            let num = Number(str.slice(current, pointer));
            let dummy = ""

            pointer++;
            for(let i = 0; i < num; i++)
            {
                
                dummy += str[pointer]
                pointer++;
            }

            strs.push(dummy)
            
        }

        return strs
    }
}
