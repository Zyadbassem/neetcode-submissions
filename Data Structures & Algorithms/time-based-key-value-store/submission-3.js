class TimeMap 
{
    constructor() 
    {
        this.keyStore = {};
        this.mostRecent = {};
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) 
    {
        this.keyStore[key] ? this.keyStore[key].push({value, timestamp})
        : this.keyStore[key] = [{value, timestamp}];
        this.mostRecent[key] = value
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) 
    {
        if (!this.keyStore[key]) return "";
        const holder = this.keyStore[key];
        return this.helper(holder, timestamp, key)
    }

    helper(arr, target)
    {
        let l = 0;
        let r = arr.length - 1;
        let res = "";
        let k = Infinity;

        while(l <= r)
        {
            let mid = Math.floor((l+r) / 2)
            if(arr[mid]["timestamp"] === target) return arr[mid]["value"];
            else if (arr[mid]["timestamp"] > target) r = mid-1;
            else
            {
                l = mid+1
                res = arr[mid]["value"];
                k = arr[mid]["timestamp"]
            }
        }

        return  res;
    }
}
