class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let sorted = position.map((v, i) => [v, speed[i]]).sort((a, b) => a[0] - b[0]);
        let myStack = []


        for(let i = sorted.length - 1; i >= 0; i--)
        {
            let time = (target - sorted[i][0]) / sorted[i][1];

            if(myStack.length > 0 &&  myStack[myStack.length -1] >= time) continue;
            else myStack.push(time)
        }


       
        return myStack.length;
    }
}

/**
Number of different car fleets
This means the num of different cars with same speed 
A car matches speed with the next one ahead of it once they are at the same position

*/
