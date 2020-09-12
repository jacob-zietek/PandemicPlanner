function updateEstimatedCost(){
    var costHandSanitizer;
    var numPeople;
    var squareFeet;
    
    costHandSanitizer = Math.ceil(numPeople / 48) * 55;
    costDeepClean = Math.ceil(squareFeet / 1000) * 80 + 40;

    var totalCost = costHandSanitizer + costDeepClean + 320;

    // Maximum capacity: {Max Capacity here}
}