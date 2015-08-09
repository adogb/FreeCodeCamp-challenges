function translate(str) {
  var index=str.search(/[aeiou]/);
  if (index === 0){
    str+='way';
  } else {
    var shifted = str.slice(0,index);
    str = str.slice(index) + shifted + 'ay';
  }
  
  return str;
}

translate("consonant");