function drop(arr, func) {
  // Drop them elements.
  while (arr.length!==0){
    if (func(arr[0])){
      return arr;
    } else {
      arr.shift();
    }
  }
  return arr;
}

drop([1, 2, 3], function(n) {return n < 3; });