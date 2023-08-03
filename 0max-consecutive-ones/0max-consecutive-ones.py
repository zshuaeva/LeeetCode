class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        longest = 0
        comparative = 0

        for num in nums:
            if num == 1:
                comparative += 1
                longest = max(longest, comparative)
            else:
                comparative = 0

        return longest
