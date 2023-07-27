from typing import List

class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:

        if not strs:
            return ""

        longest = strs[0]

        for word in strs[1:]:
            i = 0
            while i < len(longest) and i < len(word) and longest[i] == word[i]:
                i += 1
            longest = longest[:i]
            
            if not longest:
                return ""

        return longest
