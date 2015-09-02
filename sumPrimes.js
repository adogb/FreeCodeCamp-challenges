function sumPrimes(num) {
  var sum=0;
  var i=2;
  while(i<=num){
    var j=2;
    while (i%j!==0 && j<=num){
        j++;
    }
    if(j===i){
      sum+=i;
      console.log(i+" est premier");
    }
    i++;
  }

  return sum;
}

sumPrimes(10);
