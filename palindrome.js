function palindrome(str) {
  // Good luck!
  str=str.toLowerCase();
  str=str.replace(/\W+/g,"");
  
  /*if(str.length%2 !== 0){
    str=str.replace(str[Math.floor(str.length/2+1)],"");
  }*/
  if (str.length===1||str.length===0){
    return true;
  }
  
  if (str[0]===str[str.length-1]){
      return palindrome(str.slice(1,-1));
  } else {
    return false;
  }
  
}

palindrome("eye");