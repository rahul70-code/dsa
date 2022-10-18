

// var largestWordCount = function(messages, senders) {
//     let map = {};
//     messages.forEach((m,i) => {
//         senders[i] in map ? map[senders[i]] += messages[i].split(" ").length : map[senders[i]] = messages[i].split(" ").length
//     })
//     console.log(map)
//     let max = Math.max(...Object.values(map))
//     let key = Object.keys(map).filter(key => map[key] === max);
//     console.log(key)
//     return key[0]//.reduce((a, b) => a.length > b.length ? a : b, '');
// };

var largestWordCount = function(messages, senders) {
    var obj = {};
    let count = 0;
    let ans = "";
    for(let i=0; i<senders.length;i++){
        console.log("ans",ans)
        console.log("count",count)

        let str = senders[i];
        if(obj[str] > 0)
            obj[str] += messages[i].split(" ").length;
        else
            obj[str] = messages[i].split(" ").length;
        if(obj[str] > count || (obj[str] == count && str > ans)){
            ans = str;
            count = obj[str];
        }
    }
    console.log(obj)
    return ans;
};


console.log(largestWordCount(["tP x M VC h lmD","D X XF w V","sh m Pgl","pN pa","C SL m G Pn v","K z UL B W ee","Yf yo n V U Za f np","j J sk f qr e v t","L Q cJ c J Z jp E","Be a aO","nI c Gb k Y C QS N","Yi Bts","gp No g s VR","py A S sNf","ZS H Bi De dj dsh","ep MA KI Q Ou"],
["OXlq","IFGaW","XQPeWJRszU","Gb","HArIr","Gb","FnZd","FnZd","HArIr","OXlq","IFGaW","XQPeWJRszU","EMoUs","Gb","EMoUs","EMoUs"]))