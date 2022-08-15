// think to make a pizza 
// get up and by grociries
// wash and hands before making dough
// make the dough
// put dough in the oven
// wait for the pizza to be ready
// take the pizza out of the oven
// put the pizza in the box 
// enjoy your pizza


// setTimeout(thinkToMakePizza, 2000);
// setTimeout(getUpAndByGrociries, 4000);
// setTimeout(washHandsBeforeMakingDough,6000);


function thinkToMakePizza(){
    console.log("think to make a pizza");
    setTimeout(getUpAndByGrociries, 3000);
}
setTimeout(thinkToMakePizza, 2000);

function getUpAndByGrociries(){
    console.log("get up and by grociries");
    setTimeout(washHandsBeforeMakingDough, 4000);
}

function washHandsBeforeMakingDough(){
    console.log("wash and hands before making dough");
    setTimeout(makeTheDough, 5000);
}

function makeTheDough(){
    console.log("make the dough");
    setTimeout(putDoughInTheOven, 6000);
}

function putDoughInTheOven(){
    console.log("put dough in the oven");
    setTimeout(waitForThePizzaToBeReady, 7000);
}

function waitForThePizzaToBeReady(){
    console.log("wait for the pizza to be ready");
    setTimeout(takeThePizzaOutOfTheOven, 4000)
}

function takeThePizzaOutOfTheOven(){
    console.log("take thepizza to be ready");
    setTimeout(putDoughInTheOven, 3000);
}

function putThePizzaInTheBox(){
    console.log("put the pizza in the box");
    setTimeout(enjoyYourPizza, 5000);
}




// only use callback functions 


