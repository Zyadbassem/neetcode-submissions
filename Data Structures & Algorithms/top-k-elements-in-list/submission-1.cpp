#include <unordered_map>

class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        vector<vector<int>> bucket(nums.size() + 1);
        std::unordered_map<int, int> freqMap;
        for(int i = 0; i < std::size(nums); i++)
        {
           freqMap[nums[i]]++;

        }
        for(const auto& [num, freq] : freqMap)
        {
            bucket[freq].push_back(num);
        }
        vector<int> out;
        for(int i = bucket.size() - 1; i >= 0; i--)
        {
            if(out.size() >= k) break;
            for(int j = 0; j < bucket[i].size(); j++)
            {
                if(out.size() >= k) break;
                out.push_back(bucket[i][j]);
            }
        }

        return out;
    }
};
