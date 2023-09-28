class Solution(object):
    def findWords(self, words):
        rowOne = set('qwertyuiop')
        rowTwo = set('asdfghjkl')
        rowThree = set('zxcvbnm')
        
        result = []
        
        for word in words:
            word_lower = word.lower()
            
            if word_lower[0] in rowOne:
                row = rowOne
            elif word_lower[0] in rowTwo:
                row = rowTwo
            else:
                row = rowThree
            
            if all(char in row for char in word_lower):
                result.append(word)
                
        return result
