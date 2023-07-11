class Solution(object):
    def maximumWealth(self, accounts):
        """
        :type accounts: List[List[int]]
        :rtype: int
        """
        richest = 0
        for i in accounts:
            for j in accounts:
                if sum(j) > richest:
                    richest = sum(j)
        return richest