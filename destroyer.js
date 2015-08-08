function destroyer(arr) {
  // Remove all the values
  
  for (j=0;j<arr.length;j++){
    for (i=1;i<arguments.length;i++){
      if (arr[j]===arguments[i]){
        arr.splice(j,1);
      }
    }
  }
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);