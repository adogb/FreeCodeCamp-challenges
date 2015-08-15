function convert(str) {
  // &colon;&rpar;
  var arr1 = [/&/g,/</g,/>/g,/"/g,/'/g];
  var arr2 = ['&amp;','&lt;','&gt;','&quot;','&apos;'];
  
  for (var i=0; i<arr1.length; i++){
    str=str.replace(arr1[i],arr2[i]);
  }
  return str;
}

convert('Dolce & Gabbana');