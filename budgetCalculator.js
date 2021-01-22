//** Function 02 : budgetCalculator /////////////////////////*/

// Calculates budget of some Electric Goods.
function budgetCalculator(totalWatches, totalMobiles, totalLaptops) {

    // Validating Input

    // assings all variable in to an array to reduse code
    var functionParameters = [totalWatches, totalMobiles, totalLaptops];

    for (i = 0; i < functionParameters.length; i++) { // looping the inputs to check validity

        if (typeof (functionParameters[i]) == "undefined") { // Check wheathe the value is empty

            return " Your input can not be Empty!";

        } else if (typeof (functionParameters[i]) != 'number') { // Check if it's a Number

            return "Pleas provide a valid Number!";

        } else if (functionParameters[i] < 0) { // Check if it's not a Negative Number

            return functionParameters[i] + " is not a Positive Number!";

        } else {

            // Checks if the value contains a Decimal value
            var makeDecimal = "" + functionParameters[i];

            if (makeDecimal.indexOf('.') != -1) { // will be a decimal if it contains a dot(.) 

                return "Input can not be a Decimal Number!"
            }

        }
    }

    // Product Rates
    var watchRate = 50;
    var mobileRate = 100;
    var laptopRate = 500;

    // calculating product price based on Category
    var watchPrice = watchRate * totalWatches;
    var mobilePrice = mobileRate * totalMobiles;
    var laptopPrice = laptopRate * totalLaptops;

    // Calculating total budget
    var totalBudget = watchPrice + mobilePrice + laptopPrice;

    return totalBudget;
}


console.log(budgetCalculator(1, 23, 3.0 ));