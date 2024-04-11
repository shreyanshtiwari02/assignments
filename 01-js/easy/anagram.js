/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let mp = new Map();
  for (let i = 0; i < str1.length; i++){
    let key = str1[i].toLowerCase();
    mp.set( key , (mp.get(key) || 0) + 1 )
  }
  for (let i = 0; i < str2.length; i++){
    let key = str2[i].toLowerCase();
    mp.set(key,  (mp.get(key) || 0) - 1 )
  }
  for (const [key, value] of mp) {
    if(value!=0){
       console.log(key , value)
      return false;
    };
  }

  return true;
  
}
const result  = isAnagram( 'listen', 'silenT')
console.log(result)
module.exports = isAnagram;
