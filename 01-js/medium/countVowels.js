/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let vowels=['a','e','i','o','u'];
    str=str.toLowerCase();
    let ans=0;
    // str.array.forEach((element) => {
    //   if(vowels.find(element)) ans=ans+1;
    // });
    for(let i=0;i<str.length;i++){
      if(vowels.includes(str[i])) ans=ans+1;
    }
    return ans;
}

module.exports = countVowels;
// console.log(countVowels("hi how are you"))