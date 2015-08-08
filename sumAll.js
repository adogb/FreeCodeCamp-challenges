function sumAll(arr) {
  
  var max=Math.max(arr[0],arr[1]);
  var min=Math.min(arr[0],arr[1]);
  for (i=1;i<max-min;i++){
    arr.push(min+i);
  }
  arr.sort(function(a,b){return a-b;});
  
  var n=  arr.reduce(function(prev, curr){
    return prev+curr;
  } );
  return(n);
}

sumAll([1, 4]);