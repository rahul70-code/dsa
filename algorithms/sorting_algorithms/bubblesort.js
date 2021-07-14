function bubbleSort(array) {
  if (array.length == 0 || array.length == 1) return array;
  for (var i = array.length; i>0; i--) {
    for (var j = 0; j < i-1; j++) {
       // console.log(array,array[j],array[j+1])
      if (array[j] > array[j+1]) {
        // swap
        var temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  return array;
};

function bubbleSortOptimization(array) {
    if (array.length == 0 || array.length == 1) return array;
    for (var i = array.length; i>0; i--) {
        var noSwaps = true;
      for (var j = 0; j < i-1; j++) {
         // console.log(array,array[j],array[j+1])
        if (array[j] > array[j+1]) {
          // swap
          var temp = array[j];
          array[j] = array[j+1];
          array[j+1] = temp;
          noSwaps = false;
        }
      }
      if(noSwaps) break;
    }
    return array;
  }

console.log(bubbleSort([12, 4, 44, 1, 23,45,55,77]));
