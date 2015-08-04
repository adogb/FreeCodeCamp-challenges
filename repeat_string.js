function repeat(str, num) {
  // repeat after me
  if (num <= 0){
    return '';
  } else {
    return str+=repeat(str,num-1);
  }
  return str;
}

repeat('abc', 3);
