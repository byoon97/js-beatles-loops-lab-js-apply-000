function theBeatlesPlay(array1, array2) {
  var newArr = [];

  for (var i = 0; i < array1.length; i += 1) {
    var string = array1[i] + " plays " + array2[i];
    newArr.push(string);
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

// function iLoveTheBeatles(string) {
//   var array = [];
//   do {
//     string = array.push("I love the Beatles!");
//     string += 1;
//   } while (string < 15); {
//
//   }
//
//   return array;
// }
