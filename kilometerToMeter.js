//** Function 01 : kilometerToMeter /////////////////////////*/

// This function will take one paramier 'km' for Kilometer
// and then convert it to Meter.
function kilometerToMeter(km) {

    // Validating Input
 /*   if (typeof(km) == "undefined") { // Check wheathe the value is empty

        return " Your input value can not be empty!";

    } else*/ 
    if (typeof(km) != 'number') { // Check if it's a Number

        return "Pleas provide a valid Number!";

    } else if (km < 0) { // Check if it's not a Negative Number

        return km + " is not a Positive Number!";

    } else {
        // 1 kilometre = 1000 meter
        var meter = km * 1000;

        // returns the result
        return meter;
    }
}

console.log(kilometerToMeter())