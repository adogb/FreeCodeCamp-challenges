function chunk(arr, size) {
  // Break it up.
  var newArr = [];
  
  for (i=0; i<arr.length; i+=size){
    if (i>=arr.length){
      return newArr;
    }else{
      var s= arr.slice(i,i+size);
      newArr.push(s);
    }
  }
  
  
  return newArr;
}

chunk(['a', 'b', 'c', 'd'], 2);