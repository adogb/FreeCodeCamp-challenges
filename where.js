function where(collection, source) {
  var prop = Object.keys(source);
  var arr = [];
  for (i=0;i<collection.length;i++){
    if (collection[i].hasOwnProperty(prop[0])){
      if (collection[i][prop[0]]===source[prop[0]]){
        arr.push(collection[i]);
      }
    }
  }
  
  // What's in a name?
  return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });