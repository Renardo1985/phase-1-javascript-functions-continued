function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity='go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*"){

    switch (flair){
        case "||": return function (msg = "special"){ return `You are ||${msg}||!`}
        default: return function (msg = "special"){ return `You are *${msg}*!`}
    }

    //if (flair == "*")
   // {
   //     return function (msg = "special"){ return `You are *${msg}*!`}
   
   // }
//else if (flair == "||")
    //{
   //     return function (msg = "special"){ return `You are ||${msg}||!`}
  //  }
}

let test = wrapAdjective()();
console.log(test);