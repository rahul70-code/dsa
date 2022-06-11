const permut = (str) => {
    if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
    return str
      .split("")
      .reduce(
        (acc, letter, i) =>
          acc.concat(
            permut(str.slice(0, i) + str.slice(i + 1)).map((val) => letter + val)
          ),
        []
      );
  };
const str = "abc";

let result = permut(str)
console.log(result)