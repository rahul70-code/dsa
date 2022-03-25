const countCollisions = (directions) => {
    let left = 0, right = directions.length-1;
    while(left < directions.length && directions.charAt(left) == "L") left++
    while(right >= 0 && directions.charAt(right) == "R") right--;
    let count = 0;
    for(let i=left;i<=right;i++) {
        if(directions.charAt(i) != "S") count++;
    }
    return count;
}

let result = countCollisions("LLLLRSSSR")
console.log(result)