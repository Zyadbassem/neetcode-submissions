#include <unordered_map>

class Solution {
public:
    bool isAnagram(string s, string t) {
        std::unordered_map<char, int> hMap = {};

        if(s.length() != t.length())
            return false;
        
        for(int i = 0; i < s.length(); i++)
        {
            const char currS = s[i];
            hMap[currS] = hMap[currS] ? hMap[currS] + 1 : 1;
            
            const char currT = t[i];
            hMap[currT] = hMap[currT] ? hMap[currT] - 1 : -1;
        }

        for(const auto& [key, value] : hMap)
        {
            if(value != 0)
            return false;
        }

        return true;


    }
};
