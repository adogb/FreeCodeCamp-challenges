function findLongestWord(str) {
  var arr = str.split(" ");
  var long = "";
  for (i= 0; i<arr.length;i++){
    if (arr[i].length>long.length){
      long=arr[i];
    }
  }
  
  return long.length;
}

findLongestWord('The quick brown fox jumped over the lazy dog');
