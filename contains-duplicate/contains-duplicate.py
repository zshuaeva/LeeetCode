class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        counts = {}
        for i in nums:
            if i not in counts:
                counts[i] = 1
            elif counts[i] > 0:
                counts[i] += 1

        valueList = counts.values()
        for v in valueList:
            if v > 1:
                return True
        return False
