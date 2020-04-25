// jshint esversion: 6
//all functions should recieve a sentence, for each proj you have to have the required loop, and any others


let revWord = (string) => {
  let result = "";

  for (var i = 0; i < string.length; i++) {
    result = string[i] + result;
  }
  return result;
};


//Req-A THIS ONE WORKS TOO I THINK JUST SUPPOSED TO REVERSE WORDS IN SAME SENTENCE ORDER
let revWords1 = (sentence) => {
  let arr = sentence.split(" ");
  let result = "";
  for (var i = 0; i < arr.length; i++) {
    //addrevWord in front of result
    result = result + " " + revWord(arr[i]);
  }
  result = result.trim();
  return result;
};

//Req-B THIS ONE WORKS JUST SUPPOSED TO REVERSE WORDS IN SAME SENTENCE ORDER
let revWords2 = (string) => {
  let arr = string.split(" ");
  let result = "";
  arr.forEach((letter) => {
    result = result + " " + revWord(letter);
  });
  result = result.trim();
  return result;
};


//Req-C JUST SUPPOSED TO REVERSE WORDS IN SAME SENTENCE ORDER
let revWords3 = (string) => {
  let arr = string.split(" ");
  let result = "";
  for (let char of arr) {
    result = result + revWord(char) + " ";
  }
  result = result.trim();
  return result;
};



//Req-XC THIS SHOULD RETURN FALSE AND NOT TRUE< NEED TO DEBUG
let containsDuplicates = s => {
  let cArr = new Array(26).fill(0);
  for (let i in s) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[code]++;
    }
  }
  return false;
};
