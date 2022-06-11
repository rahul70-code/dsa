function hash(string, max) {
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
}

function HashTable() {
  let storage = [];
  const storageLimit = 4;

  this.add = function (key, value) {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      storage[index] = [[key, value]]
    } else {
      let inserted = false;
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (!inserted)
        storage[index].push([key, value])
    }
  }

  this.remove = function (key) {
    var index = hash(key, storageLimit);
    let value = 0;
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      value = storage[index][i][1]
      delete storage[index]
    } else {
      for (let i = 0; i < storage[index]; i++) {
        if (storage[index][i][0] === key) {
          value = storage[index][i][1]
          delete storage[index][i];
          break;
        }
      }
    }
    return value
  }

  this.lookup = function (key) {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      return undefined
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  }

  this.print = function () {
      return storage;
  }
}


const object = new HashTable();
object.add(1,5);
object.add(2,3);
object.add(3,1);
console.log(object.remove(1))
console.log(object.lookup(1))

// console.log(object.print())

