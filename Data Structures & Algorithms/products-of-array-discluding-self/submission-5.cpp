class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) 
    {
        int product = 1;
        int zeroCount = 0;
        for(int i = 0; i < nums.size(); i++)
        {
            if(nums[i] == 0)
            {
                zeroCount++;
            }
            else
                product *= nums[i];
        }
        vector<int> out(nums.size());
        for(int i = 0; i < nums.size(); i++)
        {
            if(zeroCount >= 2) out[i] = 0;
            else if(nums[i] == 0 && zeroCount < 2)  out[i] = product;
            else if(nums[i] != 0 && zeroCount >= 1) out[i] = 0;
            else out[i] = product / nums[i];
            std::cout << out[i] << "\n";
        }
        return out;
    }
};
