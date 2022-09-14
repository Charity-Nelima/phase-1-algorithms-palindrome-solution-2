function isPalindrome(word) {
  // Write your algorithm here
  for(let i=0; i<word.length/2; i++){
    const j = word.length - 1 - i
    if(word[i] !== word[j]) return false
  }
  return true
}
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");
  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}
module.exports = isPalindrome;
