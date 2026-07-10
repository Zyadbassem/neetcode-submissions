#include <unordered_map>

class Solution {
public:

    unordered_map<char, int> buildMap (string str)
    {
        std::unordered_map<char, int> output;
        for(int i = 0; i < str.length(); i++)
        {
            output[str[i]] = output[str[i]] ? output[str[i]] + 1: 1;
        }

        return output;
    }


    vector<vector<string>> groupAnagrams(vector<string>& strs) 
    {
        std::vector<std::vector<string>> out;
        std::vector<std::unordered_map<char, int>> holder;

        for(int i = 0; i < std::size(strs); i++)
        {
            const string currString = strs[i];
            const std::unordered_map<char, int> curr = buildMap(currString);
            bool found = false;
            for(int j = 0; j < std::size(holder); j++)
            {
                const std::unordered_map<char, int> key = holder[j];
                if(key == curr)
                {
                    out[j].push_back(currString);
                    found = true;
                    break;
                }
            }
            if(!found)
            {
                holder.push_back(curr);
                std::vector<string> pushValue = {currString};
                out.push_back(pushValue);
            }
        }

        return out;
    }
};

// {"act": 0, "pots": 1, }