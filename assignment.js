// todo: Gitbub link will go here


//** Function 01 : kilometerToMeter /////////////////////////*/

// This function will take one paramier 'km' for Kilometer
// and then convert it to Meter.
function kilometerToMeter(km) {

    // Validating Input
    if (typeof (km) == "undefined") {
        // Check wheathe the value is empty
        return " Your input can not be Empty!";
    }

    if (typeof (km) != 'number') {
        // Check if it's a Number
        return "Pleas provide a valid Number!";
    }

    if (km < 0) {
        // Check if it's not a Negative Number
        return km + " is not a Positive Number!";
    }

    // 1 kilometre = 1000 meter
    var meter = km * 1000;

    // returns the result
    return meter;
}



//** Function 02 : budgetCalculator /////////////////////////*/

// Calculates budget of some Electric Goods.
function budgetCalculator(totalWatches, totalMobiles, totalLaptops) {

    // Validating Input
    var functionParameters = [totalWatches, totalMobiles, totalLaptops];
    // assings all variable in to an array to reduse code

    for (i = 0; i < functionParameters.length; i++) {
        // looping the inputs to check validity

        if (typeof (functionParameters[i]) == "undefined") {
            // Check wheathe the value is empty
            return " Your input can not be Empty!";
        }

        if (typeof (functionParameters[i]) != 'number') {
            // Check if it's a Number
            return "Pleas provide a valid Number!";
        }

        if (functionParameters[i] < 0) {
            // Check if it's not a Negative Number
            return functionParameters[i] + " is not a Positive Number!";
        }

        // check the value contains a Decimal value
        var makeDecimal = "" + functionParameters[i];
        if (makeDecimal.indexOf('.') != -1) {
            // will be a decimal if it contains a dot(.) 
            return "Input can not be a Decimal Number!"
        }

    }

    // Product Rates
    var watchRate = 50;
    var mobileRate = 100;
    var laptopRate = 500;

    // calculating individual product price
    var watchPrice = watchRate * totalWatches;
    var mobilePrice = mobileRate * totalMobiles;
    var laptopPrice = laptopRate * totalLaptops;

    // Calculating total budget
    var totalBudget = watchPrice + mobilePrice + laptopPrice;

    return totalBudget;
}

//** Function 03 : hotelCost /////////////////////////*/

function hotelCost(totalDays){
   
    // Validating the input
    if (typeof (totalDays) == "undefined") { 
        // Check wheathe the value is empty
        return " Your input can not be Empty!";
    }

    if (typeof (totalDays) != 'number') {
        // Check if it's a Number
        return "Pleas provide a Numaric Value!";
    }

    if (totalDays < 0) {
        // Check if it's not a Negative Number
        return totalDays + " is not a Positive Number!";
    }

    // check the value contains a Decimal value
    var makeDecimal = "" + totalDays;
    if (makeDecimal.indexOf('.') != -1) {
        // will be a decimal if it contains a dot(.) 
        return "Input can not be a Decimal Number!"
    }

    // variable to store House Rent
    var hotelRent = 0;

    // loop and cound total Hote lCost
    for(i=1; i<=totalDays; i++){
        if(i<=10){ // Calculating Hotel Cost for 1-10 days
            hotelRent = hotelRent + 100;  // Adds new cost with previous 
        } else if( i>10 && i<=20){ // Calculating Hotel Cost for 11-20 days
            hotelRent = hotelRent + 80;
        } 
        else{ // Calculating Hotel Cost after 20 days
            hotelRent = hotelRent + 50;
        }
    }
    // returen the total cost
    return hotelRent;
}



//** Function 04 : megaFriend /////////////////////////*/

// The megaFriend function takes an array of string values
// as a parameter and returns the largest value, there are
// multile values avaialble, it returns the 1st one.

function megaFriend (friendsList){

    var largestName = friendsList[0];

    for(i = 0; i< friendsList.length; i++){
        if(largestName.length < friendsList[i].length){
            largestName = friendsList[i];            
         }
    }
    return largestName;
}