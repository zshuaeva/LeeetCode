class Solution(object):
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        INT_MAX = 2**31 - 1
        INT_MIN = -2**31

        is_negative = False
        if x < 0:
            is_negative = True
            x = -x
        
        result = 0
        while x > 0:
            last_digit = x % 10
            result = result * 10 + last_digit
            x = x // 10
        
        if is_negative:
            result = -result

        if result > INT_MAX or result < INT_MIN:
            return 0
        else:
            return result
