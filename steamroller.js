function steamroller(arr) {
  // I'm a steamroller, baby
  var finalArr=[];
  var inside = function(arr) {
    for (var i=0;i<arr.length;i++){
      if (Array.isArray(arr[i])){
        inside(arr[i]);
      } else {
        finalArr.push(arr[i]);
      }
    }
    return finalArr;
  } 
  return inside(arr);
}

steamroller([1, [2], [3, [[4]]]]);