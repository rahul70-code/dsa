function selectionSort(array) {
    // find the min element index in array for every pass
    // swap with ith element and repeat
    for(var i = 0;i<array.length;i++) {
        var min = i;
        for(var j=i+1;j<array.length;j++){
            if(array[j]<array[min]){
                min = j;    
            };
        };
        if(i !== min) {
            var temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        };
        
    };
   return array;
};

console.log(selectionSort([34,89,32,2,78,55]))