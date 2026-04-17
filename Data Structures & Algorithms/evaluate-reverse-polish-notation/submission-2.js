class Solution {

     isOperator(token) {
        if(token === "+" || token === "-" || token === "/" || token === "*") return true;
        return false
    }
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        stack.push(Number(tokens[0]));
        for(let i = 1; i < tokens.length; i++)
        {
            let current = tokens[i]
            if(!(current === "+" || current === "-" || current === "/" || current === "*")) stack.push(Number(current));

            else {
                let num2 = stack.pop()
                let num1 = stack.pop()
                let output;

                if(current == "+") output = (num1+num2);
                else if(current == "-") output = (num1-num2);
                else if(current == "*")output = (num1*num2);
                else output = Math.trunc(num1 / num2);

                console.log(output)
                stack.push(output);
            }
            
        }

        return stack.pop()
    }




   

}
