function fearNotLetter(str) {
  var alpha = 'abcdefghijklmnopqrstuvwxyz';
  var index0 = alpha.search(str[0]);
  var i = index0+1;
  for (var j=1; j<str.length; j++){
      if (alpha[i]!==str[j]){
        return alpha[i];
      }
    i++;
    }
    
  }

fearNotLetter('abce');