
function bubbleSort(array) {
  if (array.length == 0 || array.length == 1) return array;
  for (var i = 0; i< array.length-1; i++) {
    for (var j = 0; j < array.length-1-i; j++) {
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
    for (var i = 0; i< array.length-1; i++) {
      // if the array is sorted -> and there will be no swaps
      // initialize noSwaps and put it in swap block
      // if noSwaps = false -> it will be single iterator
      // and break the loop
        var noSwaps = true;
      for (var j = 0; j < array.length-1-i; j++) {
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

console.log(bubbleSort([1,3,4,5,2]));
