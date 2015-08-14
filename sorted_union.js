function unite(arr1, arr2, arr3) {
  
  var arr = arr1.concat(arr2,arr3);
  var finalArr =[];
  for (var i=0; i<arr.length; i++){
    if (finalArr.indexOf(arr[i])===-1){
      finalArr.push(arr[i]);
    }
  }
  
  return finalArr;
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);