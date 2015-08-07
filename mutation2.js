function mutation(arr) {
  arr[0]=arr[0].toLowerCase();
  arr[1]=arr[1].toLowerCase();
  
  for (i=0;i<arr[1].length;i++){
    if(arr[0].search(arr[1][i])===-1){
      return false;
    }
  }
  return true;
}

mutation(['hello', 'hey']);