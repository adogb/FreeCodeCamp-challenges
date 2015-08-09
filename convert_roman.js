var units = ['',"I","II",'III','IV','V','VI','VII','VIII','IX'];
var tens = ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'];
var hundreds = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'];

function convert(num) {
  var u = num%10;
  var t = (num%100-u)/10;
  var h = (num%1000-num%100)/100;
  var th = (num - num%1000)/1000;
  
  var roman ='';
  if (th!==0){
    for (var i=0;i<th;i++){
      roman+='M';
    }
  }
    
  roman += hundreds[h]+ tens[t] + units[u]; 
  
  return roman;
}

convert(36);