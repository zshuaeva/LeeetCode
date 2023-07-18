class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        if len(t) != len(s):
            return False

        sLetters = {}
        tLetters = {}

        for i in s:
            if i not in sLetters:
                sLetters[i] = 0
            sLetters[i] += 1

        for i in t:
            if i not in tLetters:
                tLetters[i] = 0
            tLetters[i] += 1

        if sLetters == tLetters:
            return True
        return False