class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    
    groupAnagrams(strs) {
        let holder = {}

        const isAnagram = (str, target) => {
        if(str.length !== target.length) return false

        let holder = {}
        
        for(let char of str) {
            holder[char] = (holder[char] || 0) + 1;
        }

        for(let char of target) {
            if(holder[char] !== undefined && holder[char] > 0) {
                holder[char]--;
            } else return false;
        }

        return true;
    }

        for(let str of strs){
            let found = false;

            for(let key in holder) {
                if(isAnagram(key, str)) {
                    holder[key].push(str);
                    found = true;
                }
            }

            if(!found) holder[str] = [str]
        }


        let output = []

        for(let key in holder){
            output.push(holder[key])
        }

        return output;
    }


   
   
}
