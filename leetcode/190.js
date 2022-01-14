var reverseBits = function(n) {
  //convert the number to base2 then stringify, split, and reverse 
  let reversedArray = n.toString(2).split("").reverse()
  //the converted number may not be 32 digits so add 0's to the end
  while(reversedArray.length <32){ reversedArray.push('0')}
  //join the string, then convert to Integer from base 2
  return  parseInt(reversedArray.join(""),2) 
};
