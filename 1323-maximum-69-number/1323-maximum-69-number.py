class Solution(object):
    def maximum69Number(self, num): #nice
        num_str = str(num)
        first_six = num_str.find('6')
        if first_six != -1:
            num_str = num_str[:first_six] + '9' + num_str[first_six + 1:]
        return int(num_str)
