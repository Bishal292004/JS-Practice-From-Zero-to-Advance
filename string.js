//Q1 Write isPalindrome(str) — ignore spaces, punctuation, and case. "A man, a plan, a canal: Panama" → true.

//1s let check the palindrome for single words
let word = "annanna";
let isPalindrome = () => {
  let newStr = "";
  for (let i = word.length - 1; i >= 0; i--) {
    newStr += word[i];
  }
  if (newStr === word) return true;
  return false;
};
// console.log(isPalindrome());

//The actual question
let str = "A man, a plan, a canal: Panama";

function is_Palindrome(str) {
  //converting the complete string to lowercase
  str = str.toLowerCase();

  //this loop will filter out only the alphabets from the complete string.
  let filteredStr = "";
  for (let i = 0; i < str.length; i++) {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    if (letters.indexOf(str[i]) !== -1) {
      filteredStr += str[i];
    }
  }
  str = filteredStr; //reassign the only alphabet string to the original variable.

  //reversing the string and storing it in a new string
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  //if new string and old string are same then, it is palindrome.
  if (newStr === str) {
    return true;
  }

  return false;
}
// console.log("is palindrome: " + is_Palindrome(str));

//Q2 Reverse the words in a sentence (not the characters). "I love JavaScript" → "JavaScript love I".

function reverseByWords(str) {
  // str = str.split(" ").reverse().join(" ");
  // return str;

  //the manual way of doing it without using reverse()
  str = str.split(" ");
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (i === 0) {
      newStr += str[i];
    } else {
      newStr = newStr + str[i] + " ";
    }
  }
  return newStr;
}

let str2 = "I love JavaScript";
// console.log(reverseByWords(str2));

//Q3 Find the first non-repeating character in a string. "swiss" → "w".

function nonRepeat(str) {
  str = str.toLowerCase().split("");
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j] && i !== j) {
        count++;
      }
    }
    if (count === 0) {
      return str[i];
    }
  }
}

//using indexOf() and lastIndexOf()
function nonRepeat2(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
}
// console.log(nonRepeat2("swiss"));

//Q4 Count the occurrences of each character in a string and return an object. "hello" → {h:1, e:1, l:2, o:1}.

function countEachChar(str) {
  str = str.toLowerCase();
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }
    obj[str[i]] = count;
  }
  return obj;
}
// console.log(countEachChar("swiss"));


//Q5 Write capitalizeWords(str) — capitalize the first letter of every word. "hello world from js" → "Hello World From Js".

function capitalizeWords(str){
    // str = str.trim();
    
    str = str.trim().split("");
    str[0] = str[0].toUpperCase();
    for(let i = 0; i < str.length; i++){
        if(str[i] === " "){
            str[i+1] = str[i+1].toUpperCase();
        }
    }
    str = str.join("");
    return str;
}
// console.log(capitalizeWords("   hello world from js"));



//Q6 Check if two strings are anagrams of each other. "listen" and "silent" → true.

function isAnagram(str1, str2){
    str1 = str1.trim().toLowerCase();
    str2 = str2.trim().toLowerCase();
    if(str1.length !== str2.length){
        return "Not an Anagram.";
    }
    let obj1 = countEachChar(str1);
    // console.log(obj1);
    let obj2 = countEachChar(str2);
    // console.log(obj2);

    //compare the two objects;
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    if(keys1.length !== keys2.length){
        return "Not an Anagram";
    }
    for(let key of keys1){
        if(obj1[key] !== obj2[key]){
            return "Not an Anagram";
        }
    }
    return "It's an Anagram."
}
console.log(isAnagram("listen ", "silent"));