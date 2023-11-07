# The isBadVersion API is already defined for you.
# @param version, an integer
# @return a bool
# def isBadVersion(version):

class Solution(object):
    def firstBadVersion(self, n):
        """
        :type n: int
        :rtype: int
        """
        leftBound, rightBound = 1, n
        
        while leftBound < rightBound:
            middle = leftBound + (rightBound - leftBound) // 2
            if isBadVersion(middle):
                rightBound = middle 
            else:
                leftBound = middle + 1  
        
        return leftBound
