class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const checkingText = s.replace(" ", "").toLowerCase()
        
        let left = 0;
        let right = checkingText.length - 1;

        while(left <= right)
        {   
            if(!this.isAlpha(checkingText[left])) 
            {
                left++;
                continue;
            }
            else if(!this.isAlpha(checkingText[right]))
            {
                right--;
                continue;
            }
            else if(checkingText[left]!=checkingText[right]) return false;
            
            left++;
            right--;
        }

        return true;
    }

    isAlpha(s){
        let alpha = 'abcdefghijklmnopqrstuvwxuz1234567890'

        for(let char of alpha)
        {
            if (s === char) return true
        }
        return false
    }
}
