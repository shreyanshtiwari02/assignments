/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(test) {
  console.log(test)
  let str="";
  
  for(let i=0;i<test.length;i++){
    
    if('a'<=test[i].toLowerCase() && test[i].toLowerCase()<='z'){
      console.log(test[i])
      str+=test[i].toLowerCase();
    }
    else if( 0<= test[i] && test[i]<=9 ){
      str+=test[i];
    }
    
  }
  // let newStr = str.replace(/\s/g, '');
  let wordsArray = str.split(' ');

  // Join the words in the array without spaces using join()
  let newStr = wordsArray.join('');
  console.log(newStr)
  
  for(let i=0;i<newStr.length;i++){
    if(newStr[i]!=newStr[newStr.length-1-i]){
      return false;
    }
  }
  return true;
}
isPalindrome("Hello! World123?")
module.exports = isPalindrome;
