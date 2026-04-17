class MinStack {
    constructor() {
        this.stack = []
        this.min = Infinity;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        if(this.min > val) this.min = val;
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        let newMin = Infinity
        let currentStack = this.stack
        for(let num of currentStack) 
        {
            if(num < newMin) newMin = num;
        }
        this.min = newMin;
    }

    /**
     * @return {number}
     */
    top() {
       return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min
    }
}
