"use strict";

/*
This should accept two strings: word and letters.
It should return true if the word can be built with the letters; otherwise, it should return false.

There are only lowercase letters(with no spaces or punctuation) in both word and letters.

  Constraints: time complexity: O(w + k)(if w is the length of word and k is the length of letters)

canConstructWord('aa', 'abc');
// false -- can't build "aa" with only 1 "a"

canConstructWord('abc', 'dcba');
// true -- can build "abc" with letters "abcd"

canConstructWord('aabb', 'bcabad');
  // true -- can build "aabbcc" with those letters
*/






/** Accepts a word and a string of letters, determines if the word can be constructed with the letters present */
function canConstructWord(word, letters) {
  // if word > letters return false
  if (word.length > letters.length) {
    return false;
  }

  // get frequency word
  let wordFreq = getFrequency(word);
  // get frequency letters
  let lettersFreq = getFrequency(letters);
  // if each key has the same value then true
  console.log(wordFreq);
  console.log(lettersFreq);
  for (let item in wordFreq) {
    if (wordFreq[item] > lettersFreq[item]) {
      return false;
    }
  }

  // return true or false
  return true;
}

/** creates object with the frequency of each letter  */
function getFrequency(word) {
  const freq = {};
  for (let char of word) {
    let letter = (freq[char] || 0);
    freq[char] = letter + 1;
  }
  return freq;
}
