function countLetters (string) {
  var array = string.split("");
  var count = {};
  var i = 0;
  for (var letter of array) {
    if(letter !== " "){

      if(!count[letter]){
        count[letter] = {};

        count[letter].position = i;
        count[letter].sum= 1;
      }
      else {
        count[letter].sum++;
        count[letter].position = i;
      }
    }
    i++;
  }
  return count;
}

console.log(countLetters("lighthouse in the house"));