class Solution(object):
    def isHappy(self, n):
        """
        :type n: int
        :rtype: bool
        """
        newSet = set()
        while n !=1 and n not in newSet:
            newSet.add(n)
            n = sum(int(current) ** 2 for current in str(n))
        return n == 1