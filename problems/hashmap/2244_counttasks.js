/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    let taskCache = {};
    tasks.forEach(t => {
        if(taskCache[t]) taskCache[t]++;
        else taskCache[t] = 1
    });
    let totalTasks = 0
    console.log(taskCache)
    for(let count of Object.values(taskCache)) {
        if(count < 2) return -1;
        else count <= 3 ? totalTasks+=1: totalTasks+=count%3
    }
    return totalTasks
 };
 console.log(Math.round(4/3))


 console.log(minimumRounds([5,5,5,5]))