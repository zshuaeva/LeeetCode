class Solution(object):
    def sortSentence(self, s):
        s_list = s.split(" ")
        s_dict = {}
        result = ""
        for word in s_list:
            s_dict[word[-1]] = word[:-1]
        dict_2 = [s_dict[key] for key in sorted(s_dict)]
        for w in dict_2:
            result += w + " "
        return result.strip()
        