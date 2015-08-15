function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var newStr='';
  for (var i=0; i<str.length; i++){
    var k = str[i].toUpperCase();
    if (k===' '){
      newStr+=str[i];
    } else if (k===str[i]){
      newStr=newStr+' '+str[i];
    }else{
      newStr+=str[i];
      }
  }
  if (newStr[0]===' '){
    newStr=newStr.slice(1);
  }
  newStr=newStr.toLowerCase();
  newStr=newStr.replace(/[\W_]+/g,'-');
  
  return newStr;
}

spinalCase('thisIsSpinalTap');
