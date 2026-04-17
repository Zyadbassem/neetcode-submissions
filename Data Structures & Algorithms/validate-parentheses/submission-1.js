class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length < 2) return false;

        let stack = []

        for(let char of s)
        {
            if (
                char === '(' || 
                char === '[' ||
                char === '{'
            ) stack.push(char);

            else {
                let turn = stack.pop();
                if (
                    (turn === '{' && char === '}') ||
                    (turn === '[' && char === ']') ||
                    (turn === '(' && char === ')')
                ) continue;
                else return false;
            }
        }

        if (stack.length >= 1) return false;
        else return true;
    }
}
