class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) 
    {
        let max = -Infinity;
        let min = 1;
        for(let i = 0; i < piles.length; i++)
        {
            max = Math.max(piles[i], max);
        }
        let lowest = Infinity;
        while(min <= max)
        {
            let mid = Math.floor((min+max)/ 2);
            let hours = this.howManyHoursItTakes(piles, mid)
            if(hours > h) min = mid+1;
            if(hours <= h) 
            {
                lowest = Math.min(lowest, mid)
                max = mid-1;
            }
        }
        return lowest;
    }

    howManyHoursItTakes(piles, rate)
    {
        let hours = 0;
        for(let pile of piles)
        {
            hours += Math.ceil(pile / rate)
        }
        return hours
    }
}
