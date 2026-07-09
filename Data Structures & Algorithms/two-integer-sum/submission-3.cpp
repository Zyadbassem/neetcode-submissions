#include <unordered_map>
class Solution 
{
public:
    vector<int> twoSum(vector<int>& nums, int target) 
    {
        std::unordered_map<int, int> hMap = {};
        const int len = std::size(nums);
        std::vector<int> out = {-1, -1};

       for(int i = 0; i < len; i++)
       {

        const int curr = nums[i];
        if(hMap.count(curr))
        {
            out[0] = hMap[curr];
            out[1] = i;
            return out;
        }

        else 
        {
            const int wanted = target - curr;
            hMap[wanted] = i;
        }
        
       }

       return out;
    }
};
