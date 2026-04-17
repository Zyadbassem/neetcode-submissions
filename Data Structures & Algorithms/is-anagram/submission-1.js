class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const holder = {};
        for(let char of s){
            if(holder[char]) holder[char]++;
            else holder[char] = 1;
        }

        for(let char of t){
            if(holder[char] !== undefined && holder[char] >= 1) holder[char]--;
            else return false;
        }

        return true

    }
}
