let string = "abc";
let output = ["b2ter","be2er","bet2r","b3er","be3r","b4r"];



const permut = (str) => {
    console.log(str)
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


  console.log(permut(string))