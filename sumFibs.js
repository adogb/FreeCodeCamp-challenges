function sumFibs(num) {
  var arr = [1,1];
  var sum=0;
  if(num===0){
    return 1;
  } else if (num===1){
    return 2;
  } else {
    var i=2;
    while(arr[i-1]<num){
      arr[i]=arr[i-2]+arr[i-1];
      i++;
    }
    
    for (var j=0;j<arr.length;j++){
      if (arr[j]>num){
        return sum;
      }
      if (arr[j]%2!==0){
        sum+=arr[j];
      }
    }
  }
  return sum;
}

sumFibs(4);