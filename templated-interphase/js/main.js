// File for general event handling to make the website function
// !!! In the future should prob make everything class based, however
// this should work given that this is for a hackathon.

// Should generally work where a button press will lead to a 
// function call to some method within main.js

var numPeople;
var coords;

function genSocialDistance(){
    len1ForSim = document.getElementById("length").value;
    len2ForSim = document.getElementById("width").value;
    numPeople = document.getElementById("people").value;

    setup();
    document.getElementById('drawingCanvas').style.display='block'; // This shows the HTML5 canvas

    var maxPeople = Math.ceil(len1ForSim/6) * Math.ceil(len2ForSim/6);
    console.log("Max people: " + maxPeople);

    //getUserLocation();    
}

function getUserLocation(){
    navigator.geolocation.getCurrentPosition(
        position => {
          console.log(position.coords.latitude);
          console.log(position.coords.longitude);
          coords = position.coords
        },
        error => {
          console.log(error.message);
        },
        {timeout:10000, enableHighAccuracy:true, maximumAge:60000}
     )
}