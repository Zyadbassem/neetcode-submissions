class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) 
    {
        let window = "" + s[0];
        let currHash = {[s[0]]: 1}
        let max = 1;
        
        let left = 0;
        let right = 1;

        while(right < s.length)
        {
            let char = s[right];
            currHash[char] = currHash[char] ? currHash[char] + 1 : 1;
            window += char
            let wLength = window.length;
            let mFreq = this.mostFreqWithinWindow(currHash);

            if((wLength - currHash[mFreq]) > k) 
            {
                let rChar = s[left];
                let removeIndex = window.indexOf(rChar);
                window = window.substring(removeIndex+1);
                currHash[rChar]--;

                left++;
            }
            max = Math.max(max, window.length);
            right++;
        }

        return max;

    }
//"AAABABB", 1
//  =   =
//window = "AABAB"; hash = {A: 3, B: 2} max = 5

    mostFreqWithinWindow(hashMap)
    {
        let mostFreq;
        for(let key in hashMap)
        {
            if(!mostFreq || hashMap[mostFreq] < hashMap[key])
                mostFreq = key;
        }
        return mostFreq;
    }
}


// "AABAA", 1
// find a hash map with all chars 
// {A: 4, B: 1};