// File for general event handling to make the website function
// !!! In the future should prob make everything class based, however
// this should work given that this is for a hackathon.

// Should generally work where a button press will lead to a 
// function call to some method within main.js

var numPeople;
var coords;
var maxPeople;
var peopleAttending;
var stateData;
var locState;

function genSocialDistance() {
    len1ForSim = parseInt(document.getElementById("length").value, 10);
    len2ForSim = parseInt(document.getElementById("width").value, 10);
    numPeople = parseInt(document.getElementById("people").value, 10);
    locState = document.getElementById("location").value;


    setup();
    document.getElementById('drawingCanvas').style.display = 'block'; // This shows the HTML5 canvas

    maxPeople = Math.ceil(len1ForSim / 6) * Math.ceil(len2ForSim / 6); // Max amt of people given space
    //console.log("Max people: " + maxPeople);

    var peopleLimitMessage = "Please keep in mind that the max amount of participants for this event is: " + maxPeople;
    if (maxPeople < numPeople)
        peopleLimitMessage += ". This is less than the number of people you entered. Consider reducing the amount of attendees.";
    else
        peopleLimitMessage += ".";

    document.getElementById("peopleLimit").innerHTML = peopleLimitMessage;

    updateCostTable();
    document.getElementById('two').style.display = 'block';

    $.getJSON("js/restrictions.json", function (json) {
        stateData = json;
        // console.log(stateData);
        //console.log(searchForState("NY"))
        updateStateData(searchForState(locState));
    }
    );



}

function updateStateData(input) {
    if(input == null){
        document.getElementById("stateInfo").innerHTML = "";
        return;
    }

    var text = "";
    text += "In the state where the event will happen, the cap on participants is: " + input.maxParticipants;
    document.getElementById("stateInfo").innerHTML = text;

}

function updateCostTable() {
    /* All revalant elements of table 
    document.getElementById("handSanitizerStationCost").innerHTML = "";
    document.getElementById("handSanitizerCost").innerHTML = "";
    document.getElementById("deepCleanCost").innerHTML = "";
    document.getElementById("handSanitizerStationDesc").innerHTML = "";
    document.getElementById("handSanitizerDesc").innerHTML = "";
    document.getElementById("deepCleanDesc").innerHTML = "";
    */

    var sanitizerBottles = Math.ceil(maxPeople / 48);
    var costSanitizer = sanitizerBottles * 55; // Approx. cost of sanitizer in dollars
    // Assumes 480 squirts per bottle, $55 per bottle, 10 squirts per person per day

    var squareFeet = Math.ceil((len1ForSim * len2ForSim) / 1000);
    var costDeepClean = squareFeet * 80 + 40; // Approx. cost of deep cleaning for venue
    // Assumes 80 dollars per 1000sq ft and $40 baseline

    document.getElementById("handSanitizerCost").innerHTML = "$" + costSanitizer;
    document.getElementById("deepCleanCost").innerHTML = "$" + costDeepClean;

    document.getElementById("handSanitizerDesc").innerHTML = sanitizerBottles + "x Hand Sanitizer Refill";
    document.getElementById("deepCleanDesc").innerHTML = "Deep Cleaning Cost for roughly " + squareFeet * 1000 + " square feet";

    document.getElementById("totalCost").innerHTML = "$" + (costDeepClean + costSanitizer + 320);
}

function getUserLocation() {
    navigator.geolocation.getCurrentPosition(
        position => {
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
            coords = position.coords
        },
        error => {
            console.log(error.message);
        },
        { timeout: 10000, enableHighAccuracy: true, maximumAge: 60000 }
    )
}

function searchForState(inputState) {
    var states = stateData["states"];
    //console.log(states);
    for (var i = 0; i < states.length; i++) {
        var patt = new RegExp(states[i].id.toLowerCase());
        if (patt.test(inputState.toLowerCase())) {
            return states[i];
        }
    }
    return null;
}