//function to get random number 
let getRandomNumber = function(size){
    return Math.floor(Math.random() * size);
}

//get distance between click and function
let getDistance = function(event, targets){
    let diffX = event.offsetX - targets.x;
    let diffY = event.offsetY - targets.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

//telling the player hints
let getDistanceHint = function(distance){
    if (distance < 10) {
        return "Boiling hot!";
        } else if (distance < 20) {
        return "Really hot";
        } else if (distance < 40) {
        return "Hot";
        } else if (distance < 80) {
        return "Warm";
        } else if (distance < 160) {
        return "Cold";
        } else if (distance < 320) {
        return "Really cold";
        } else {
        return "Freezing!";
    }
}

let img = document.getElementById("map");
let clicks = 0;

//make object that will get random position of treasure
let target = {
    x: getRandomNumber(img.width),
    y: getRandomNumber(img.height)
};


//click handler counts clicks, displays messages, calculate how far click from treasure 
$("#map").click(function(event){
    clicks++;

    let distance = getDistance(event, target);
    let distanceHint = getDistanceHint(distance);

    $("#distance").text(distanceHint);

    if(distance < 8){
        $("#distance").text('');
        alert(`Found the treasure in ${clicks} clicks!`)
        clicks = 0;
    }
})