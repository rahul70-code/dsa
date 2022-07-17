function removeDup(str) {
    return Array.from(new Set(str.split(''))).join("").toString()
};


let result = removeDup("zvvo");
console.log(result)