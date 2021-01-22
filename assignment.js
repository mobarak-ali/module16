// https://github.com/mobarak-ali/module16


//** Function 01 : kilometerToMeter /////////////////////////*/

// This function will take one parameter 'km' for Kilometer
// and then convert it to Meter.

function kilometerToMeter(km) {

    // Validating Input
    /* 
    if (typeof(km) == "undefined") { // Check wheathe the value is empty
        return " Your input value can not be empty!";
    } else */
    if (typeof (km) != 'number') { // Check if it's a Number

        return "Please provide a valid Number!";

    } else if (km < 0) { // Check if it's not a Negative Number

        return km + " is not a Positive Number!";

    } else { // calculating the meter

        // 1 kilometre = 1000 meter
        var meter = km * 1000;

        // returns the result
        return meter;
    }
}



//** Function 02 : budgetCalculator /////////////////////////*/

// Calculates budget of some Electric Goods.

function budgetCalculator(totalWatches, totalMobiles, totalLaptops) {

    // Validating Input

    // assings all variable in to an array to reduse code
    var functionParameters = [totalWatches, totalMobiles, totalLaptops];

    for (i = 0; i < functionParameters.length; i++) { // looping the inputs to check validity

        if (typeof (functionParameters[i]) != 'number') { // Check: if it's a Number

            return "Please provide a valid Number!";

        } else if (functionParameters[i] < 0) { // Check: if it's not a Negative Number

            return functionParameters[i] + " is not a Positive Number!";

        } else { // Checks if the value contains a Decimal value

            // converts value to string and perfom a search 
            var makeDecimal = "" + functionParameters[i];

            if (makeDecimal.indexOf('.') != -1) { // will be a decimal if it contains a dot(.) 

                return "Input can not be a Decimal Number!"
            }

        }
    }

    // Product's Rate
    var watchRate = 50;
    var mobileRate = 100;
    var laptopRate = 500;

    // calculating product price based on Type/Rate
    var watchPrice = watchRate * totalWatches;
    var mobilePrice = mobileRate * totalMobiles;
    var laptopPrice = laptopRate * totalLaptops;

    // Calculating total Budget
    var totalBudget = watchPrice + mobilePrice + laptopPrice;

    return totalBudget;
}



//** Function 03 : hotelCost /////////////////////////*/

// This function count Hotel Rent that applies
// different conditions based on one's staying days 

function hotelCost(totalDays) {

    // Validating the input
    if (typeof (totalDays) != 'number') { // Check if it's a Number

        return "Please provide a Numeric Value!";

    } else if (totalDays < 0) { // Check if it's not a Negative Number

        return totalDays + " is not a Positive Number!";

    } else { // check the value contains a Decimal value

        var makeDecimal = "" + totalDays;

        if (makeDecimal.indexOf('.') != -1) { // will be a decimal if it contains a dot(.) 

            return "Input can not be a Decimal Number!"
        }

        // variable to store House Rent
        var hotelRent = 0;

        // loop and count total Hotel Cost
        for (i = 1; i <= totalDays; i++) {
            if (i <= 10) { // Calculating Hotel Cost for 1-10 days

                hotelRent = hotelRent + 100;  // Adds new cost with previous 

            } else if (i > 10 && i <= 20) { // Calculating Hotel Cost for 11-20 days

                hotelRent = hotelRent + 80;

            } else { // Calculating Hotel Cost after 20 days

                hotelRent = hotelRent + 50;
            }
        }

        // returen the total cost
        return hotelRent;

    }
}


//** Function 04 : megaFriend /////////////////////////*/

// This function takes an array of string values as parameters 
// and returns the 1st largest value if multiple available

function megaFriend(friendsList) {

    if (Array.isArray(friendsList) != true) { // validate the input as array

        return "Please provide a valid Array!";

    } else { // assumes the 1st value as the largest 

        var largestName = friendsList[0];

        for (i = 0; i < friendsList.length; i++) { // Validating the value inside array

            if (typeof (friendsList[i]) == "undefined" || friendsList[i] == "") { // Check wheathe the value is empty

                return " There is an Empty Value on index[" + i + "]";

            } else if (typeof (friendsList[i]) != 'string') { // Check if it's a String

                return "Pleas provide a String Value for index[" + i + "]";

            } else { // Checks the Largest name

                if (largestName.length < friendsList[i].length) { // assigns the new largest value
                    largestName = friendsList[i];
                }
            }
        }
        // returns the largst name.
        return largestName;
    }
}