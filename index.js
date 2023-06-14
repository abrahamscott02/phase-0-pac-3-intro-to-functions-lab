function shout(string){
 return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase());
}

function logWhisper(string){
    console.log(string.toLowerCase());
}



// logShout("Amazing");

/*

const string = "Hello!";
const message = "I can't hear you!";

function sayHiToHeadphonedRoommate(string) {
    return message() ? string === string.toLowerCase();
}

*/


function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()){
        return ("I can't hear you!");
    }
    if(string === string.toUpperCase()){
        return ("YES INDEED!");
    }
    if (string === "Let's have dinner together!"){
        return ("I would love to!");
    }
}

console.log(sayHiToHeadphonedRoommate("i love learning"));
