/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    let count = 0
    points = points.sort((a,b) => a[0]-b[0]);
    console.log(points)
    for(let p=1;p<points.length;p++) {
        if(points[p-1][1] < points[p][0]) count++;
    }
    return count
};


console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]))