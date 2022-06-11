/**
 * @param {string} num
 * @return {boolean}
 */
 var digitCount = function(num) {
    let map = {};
    num.split("").forEach((n,i) =>{
        if(n in map) map[n]++;
        else map[n] = 1
    })
    let flag = false;
    for(let i=0;i<num.length;i++) {
      if(map[i] == num[i] || (map[i] == undefined && num[i] == 0)) flag = true
      else if(map[i]==undefined && num[i] > 0) {
          flag = false;
          break;
      }
      else {
        flag = false;
        break; 
      }
    }
    return flag
   
};

console.log(digitCount("01"))