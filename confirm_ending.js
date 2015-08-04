function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var l = target.length;
  if (str.substr(-l)===target){
    return true;
  } else {
    return false;
  }
  //return str;
}

end('Bastian', 'n');