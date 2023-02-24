//function to get random number 
let getRandomNumber = function(size){
    return Math.floor(Math.random() * size);
}

//make object that will get random position of treasure
let width = 800;
let height = 800;

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

let clicks = 0;

//get distance between click and function
let getDistance = function(event, target){
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

//click handler counts clicks, displays messages, calculate how far click from treasure 
$("#map").click(function(event){
})