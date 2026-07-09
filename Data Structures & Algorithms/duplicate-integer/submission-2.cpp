#include <unordered_map>
class Solution 
{
public:
    bool hasDuplicate(vector<int>& nums) 
    {
        std::unordered_map<int, bool> sMap = {};
        const int length = std::size(nums);
        for(int i = 0; i < length; i++)
        {
            if(sMap[nums[i]])
                return true;
            
            sMap[nums[i]] = true;
        }

        return false;
    }  
};