class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) 
    {
        let currWindow = "";
        let maxLen = 0;

        for(let i = 0; i < s.length; i++)
        {
            let char = s[i]; 
            if(currWindow.indexOf(char) !== -1)
            {
                let cutIndex = currWindow.indexOf(char);
                currWindow = currWindow.slice(cutIndex+1);
                
            }
            currWindow += char;
            maxLen = Math.max(maxLen, currWindow.length);
        }

        return maxLen
    }
}
// "helolow", ""
//. =