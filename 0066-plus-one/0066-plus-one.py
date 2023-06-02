class Solution(object):
    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """
        together = ''.join(map(str, digits))
        newNumber = int(together) + 1
        return list(map(int, str(newNumber)))