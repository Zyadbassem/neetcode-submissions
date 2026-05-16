class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) 
    {
        let keyHash = {}
        let currWindow = s2.substring(0, s1.length);
        let windowHash = {}
        for(let i = 0; i < s1.length; i++)
        {
            let keyChar = s1[i];
            keyHash[keyChar] = keyHash[keyChar] ? keyHash[keyChar] + 1 : 1;

            let windowChar = currWindow[i];
            windowHash[windowChar] = windowHash[windowChar] ? windowHash[windowChar]+1 : 1;
        }



        
        for(let i = s1.length ; i < s2.length; i++)
        {
            if(this.hashEqual(keyHash, windowHash))
                return true;
            console.log(currWindow)
            let rChar = currWindow[0];
            windowHash[rChar]--;
            
            let aChar = s2[i];
            currWindow = currWindow.substring(1) + aChar;
            windowHash[aChar] = windowHash[aChar] ? windowHash[aChar] + 1 : 1
        }
        if(this.hashEqual(keyHash, windowHash))
            return true;
        return false
    }

    hashEqual(h1, h2)
    {
        for(let char in h1)
        {
            if(h1[char] != h2[char])
                return false;
        }
        return true;
    }
}
