class Solution {
public:

    string encode(vector<string>& strs) 
    {
        string encoded = "";
        for(int i = 0; i < strs.size(); i++)
        {
            encoded += std::to_string(strs[i].length()) + "#" + strs[i];
        }
        return encoded;
    }

    vector<string> decode(string s)
    {
        int j = 0;
        int i = 0;
        vector<string> out;
        while(i < s.length())
        {
           if(s[i] != '#')
           {
                i++;
           }
           else
           {
              const int num = std::stoi(s.substr(j, i-j));
              const string word = s.substr(i+1, num);
              out.push_back(word);
              i += num + 1;
              j = i;
           }
        }

        return out;
    }
};
