let string = "rotator";
let output = ["b2ter","be2er","bet2r","b3er","be3r","b4r"];
//rahul - r2ul, ra2l, r3l

function len(num) {
  let count = 0; let product = 1;
  for(let i=1;i<num.length-2;i++) {
    count+=i*product;
  }
  return count;
}

function convert(string) {
  let k = len(string);
  let result = [];
  if(string.length == 3) result.push(string.slice(0,1) + 1 + string.slice(2,3))
  if(k > 0) {
     let i=1,j=2, g=j;
      while(k--) {
        let str = string.slice(0,i) + g + string.slice(j+1, string.length);
        result.push(str);
        i++; j++;
        if(j == string.length-1) {
          i = 1;
          j = g+1;
          g=j;
        }
      }
  }
  return result;
}

console.log("result : "+convert(string))