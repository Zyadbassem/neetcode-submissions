class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        let holder = {}
        for(let char of s){
            holder[char] = (holder[char] || 0) + 1;
        }
        for(let char of t){
            if(holder[char] > 0)holder[char]--;
            else return false;
        }

        return true
        
    }
}
