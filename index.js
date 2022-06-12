function saturdayFun(toDo = "roller-skate") {
    return (`This Saturday, I want to ${toDo}!`);
}
saturdayFun();
saturdayFun("bathe my dog");

const mondayWork = function (todo = "go to the office") {

return (`This Monday, I will ${todo}.`);
}
mondayWork();
mondayWork("work from home");

function wrapAdjective(wrap = "*") {
    return function (Iam = "special") {
        return `You are ${wrap}${Iam}${wrap}!`;
    }
}
wrapAdjective();
wrapAdjective("||")("a dedicated programmer");