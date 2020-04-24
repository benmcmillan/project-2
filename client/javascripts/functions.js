// jshint esversion: 6
//all functions should recieve a sentence, for each proj you have to have the required loop, and any others


let revWord = (string) => {
  let result = "";

  for (var i = 0; i < string.length; i++) {
    result = string[i] + result;
  }
  return result;
};

console.log(revWord("Thurs"));

//Req-A THIS ONE WORKS TOO I THINK
let revWords1 = (sentence) => {
  let arr = sentence.split("");
  let result = "";
  for (var i = 0; i < arr.length; i++) {
    //addrevWord in front of result
    result = revWord(arr[i]) + result;
  }
  return result;
};

//Req-B THIS ONE WORKS
let revWords2 = (string) => {
  let arr = string.split("");
  let result = "";
  arr.forEach((letter) => {
    result = revWord(letter) + result;
  });
  return result;
};


//Req-C This one works!
let revWords3 = (string) => {
  let arr = string.split("");
  let result = "";
  for (let char of arr) {
    result = revWord(char) + result;
  }
  return result;
};



//Req-XC THIS SHOULD RETURN FALSE AND NOT TRUE< NEED TO DEBUG
let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};
