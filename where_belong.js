function where(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  arr.sort(function compare(a,b) {return a-b;});
  var n = arr.indexOf(num);
  
  return n;
}

where([40, 60], 50);