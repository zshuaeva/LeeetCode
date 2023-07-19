class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if needle == "":
            return None
        if haystack == "":
            return None
        
        for i in range(len(haystack) - len(needle) + 1):
            sub = slice(i, i + len(needle))
            print(haystack[sub])
            if haystack[sub] == needle:
                return i
        return -1

        