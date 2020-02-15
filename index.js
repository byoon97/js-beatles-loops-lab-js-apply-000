// add solution here
function theBeatlesPlay(array1, array2) {
  var newArr = [];

  for (var i = 0; i < 4; i += 1) {
    var newStr = array1[i] + " plays " + array2[i];
    newArr.push(newStr);
  }

  return newArr;
}

function johnLennonFacts(array) {
  var newArr = [];

  for (var i = 0; i < array.length; i += 1) {
    var fact = array[i];
    var string = fact + "!!!";
    newArr.push(string);
  }

  return newArr;
}

function iLoveTheBeatles(string) {
  var array = [];
  do {
    string = array.push("I love the Beatles!");
    x += 1;
  } while (x < 15); {

  }

  return array;
}
