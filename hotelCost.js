// //** Function 03 : hotelCost /////////////////////////*/

// function hotelCost(totalDays){

//     // Validating the input
//     if (typeof (totalDays) == "undefined") {
//         // Check wheathe the value is empty
//         return " Your input can not be Empty!";
//     }

//     if (typeof (totalDays) != 'number') {
//         // Check if it's a Number
//         return "Pleas provide a Numaric Value!";
//     }

//     if (totalDays < 0) {
//         // Check if it's not a Negative Number
//         return totalDays + " is not a Positive Number!";
//     }

//     // check the value contains a Decimal value
//     var makeDecimal = "" + totalDays;
//     if (makeDecimal.indexOf('.') != -1) {
//         // will be a decimal if it contains a dot(.) 
//         return "Input can not be a Decimal Number!"
//     }

//     // variable to store House Rent
//     var hotelRent = 0;

//     // loop and cound total Hote lCost
//     for(i=1; i<=totalDays; i++){
//         if(i<=10){ // Calculating Hotel Cost for 1-10 days
//             hotelRent = hotelRent + 100;  // Adds new cost with previous 
//         } else if( i>10 && i<=20){ // Calculating Hotel Cost for 11-20 days
//             hotelRent = hotelRent + 80;
//         } 
//         else{ // Calculating Hotel Cost after 20 days
//             hotelRent = hotelRent + 50;
//         }
//     }
//     // returen the total cost
//     return hotelRent;
// }


//** Function 03 : hotelCost /////////////////////////*/

// This function coust Hotel Rent thay applies
// different conditions based ony one's staying days 
function hotelCost(totalDays) {

    // Validating the input
    if (typeof (totalDays) == "undefined") { // Check wheathe the value is empty

        return " Your input can not be Empty!";

    } else if (typeof (totalDays) != 'number') { // Check if it's a Number

        return "Please provide a Numaric Value!";

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


// uncomment below 3 lines to test the functions
console.log(hotelCost('-+*1'));
console.log(hotelCost(11));
console.log(hotelCost(5.0));
