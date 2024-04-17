function isPalindrome(word) {
  // 1. Preprocess: Convert to lowercase and remove non-alphabetic characters
  const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');

  // 2. Compare characters from both ends
  let leftIndex = 0;
  let rightIndex = cleanWord.length - 1;

  while (leftIndex < rightIndex) {
    if (cleanWord[leftIndex] !== cleanWord[rightIndex]) {
      return false; // Not a palindrome
    }
    leftIndex++;
    rightIndex--;
  }

  return true; // It's a palindrome
}


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;