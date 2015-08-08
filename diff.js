function diff(arr1, arr2) {
  var newArr = [];
  for (var i=0;i<arr1.length;i++){
    if (arr2.indexOf(arr1[i])===-1){
      newArr.push(arr1[i]);      
    } else {
      arr2.splice(arr2.indexOf(arr1[i]),1);
    }
  }
  newArr=newArr.concat(arr2);  
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);