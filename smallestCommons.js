function smallestCommons(arr) {
  var max=Math.max(arr[0],arr[1]);
  var min=Math.min(arr[0],arr[1]);
  for (i=1;i<max-min;i++){
    arr.push(min+i);
  }
  arr.sort(function(a,b){return a-b;});
  
  var ok = false;
  var i=1; //initialisation du plus petit multiple
  while (!ok){
    var j=0;
    while(i%arr[j]===0 && j<arr.length){ /*on checke chaque valeur de arr; tant que i est multiple de arr[j], on continue*/
      j++;
    }
    if (j===arr.length){ // si on est arrivé en bout de arr, alors i est bien le smallest common multiple
      ok =true;
      return i;
    }
    i++; // sinon on augmente i de 1 et on recommence
  }
  
  return i;
}


smallestCommons([1,5]);