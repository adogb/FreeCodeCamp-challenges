function pair(str) {
   
  var array = [];
  for (var i=0; i<str.length; i++){
    switch(str[i]){
      case 'C':
        array.push(['C','G']);
        break;
      case 'G':
        array.push(['G','C']);
        break;
      case 'A':
        array.push(['A','T']);
        break;
      case 'T':
        array.push(['T','A']);
        break;
      default:
        console.log('not a pair');
    }
          
          
  }
  
  return array;
}

pair("GCG");