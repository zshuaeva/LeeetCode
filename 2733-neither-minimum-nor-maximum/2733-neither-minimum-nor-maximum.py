class Solution(object):
    def findNonMinOrMax(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if len(nums) < 3:
            return -1
        
        small = nums[0]
        large = nums[0]
        for i in nums:
            if i > large:
                large = i
            if i < small:
                small = i

        for j in nums:
            if j != large and j != small:
                return j
        return -1
