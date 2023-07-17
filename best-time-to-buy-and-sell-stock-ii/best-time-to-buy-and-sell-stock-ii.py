class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        result = 0

        for i in range(1, len(prices)):
            difference = prices[i] - prices[i-1]
            if difference > 0:
                result += difference

        return result
        