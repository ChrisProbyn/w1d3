function countLetters (string) {
  var array = string.split("");
  var count = {};
  for (var letter of array) {
    if(letter !== " "){
      if(!count[letter]){
        count[letter] = 1;
      }
      else {
        count[letter]++;
      }
    }
  }
  return count;
}

console.log(countLetters("lighthouse in the house"));
