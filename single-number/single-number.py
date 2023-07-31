class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return None
        
        newDict = {}
        
        for num in nums:
            if num not in newDict:
                newDict[num] = 1
            else:
                newDict[num] += 1
                
        for k, v in newDict.items():
            if v == 1:
                return k
