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
    
}

