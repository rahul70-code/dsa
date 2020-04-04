q = [];
// method 1
q.push('first');
q.push('second');
q.push('third');
console.log(q)
q.shift()
console.log(q)

// method 2 ==> efficient
q.unshift('first')
q.unshift('second')
q.unshift('third')
console.log(q)
q.pop()
console.log(q)

