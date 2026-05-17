class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) 
    {
        let output = "";
        if(s.length < t.length) return output;

        let mHash = {};
        let kHash = {};
        let currWindow = s.substring(0, t.length);

        for(let i = 0; i < currWindow.length; i++)
        {
            let mainC = currWindow[i];
            let keyC = t[i];

            mHash[mainC] = mHash[mainC] ? mHash[mainC] + 1 : 1;
            kHash[keyC] = kHash[keyC] ? kHash[keyC] + 1 : 1;
        }


        for(let i = t.length; i < s.length; i++)
        {
            // Check if main has key
            while(this.mainHasKey(mHash, kHash))
            {
                output = output.length > currWindow.length || output == "" ? currWindow : output;
                let rChar = currWindow[0];
                mHash[rChar]--;
                currWindow = currWindow.substring(1);
            }

            let aChar = s[i];
            currWindow += aChar;
            mHash[aChar] = mHash[aChar] ? mHash[aChar] + 1 : 1;
        }

        while(this.mainHasKey(mHash, kHash))
        {
            output = output.length > currWindow.length || output == "" ? currWindow : output;
            let rChar = currWindow[0];
            mHash[rChar]--;
            currWindow = currWindow.substring(1);
        }
        
        return output;
    }

    mainHasKey(main, key) 
    {
        for(let k in key)
        {
            if(key[k] <= main[k]) continue;
            else return false;
        }

        return true;
    }
}
