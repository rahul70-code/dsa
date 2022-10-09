function maxQuality(packets, channels) {
    packets.sort((a,b) => a - b);
    let res = 0;
    
    while(channels > 1) {
      res += packets.pop();
      
      channels--;
    }
    console.log("res",res)
    res += Math.ceil(packets.reduce((p , c) => p + c, 0) / packets.length);
    
    return res;
  }


console.log(maxQuality([1,2,3,4,5], 2))
// o/p = 8

