class Solution:
    def myAtoi(self, s):
        result = 0
        sign = 1
        i = 0

        s = s.lstrip()

        if i < len(s) and (s[i] == '-' or s[i] == '+'):
            sign = -1 if s[i] == '-' else 1
            i += 1

        while i < len(s) and s[i].isdigit():
            digit = int(s[i])
            if result > (2**31 - digit) // 10:
                return (2**31 - 1) if sign == 1 else -2**31
            result = result * 10 + digit
            i += 1

        result *= sign

        return max(min(result, 2**31 - 1), -2**31)
