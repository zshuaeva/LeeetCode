var mostWordsFound = function(sentences) {
  result = 0;
  
  for (var i = 0; i < sentences.length; i++) {
    if (sentences[i].split(" ").length > result) {
      result = sentences[i].split(" ").length;
      
    }
  }
  return result;
}