//** Function 04 : megaFriend /////////////////////////*/

// This function takes an array of string values as parameters 
// and returns the 1st largest value if multile avaialble

function megaFriend(friendsList) {

    if (Array.isArray(friendsList) != true) { // validate the input as array

        return "Please provide a valid Array!";

    } else {

        // assumes the 1st value as the largest 
        var largestName = friendsList[0];

        for (i = 0; i < friendsList.length; i++) {

            // Validating the value inside array
            if (typeof (friendsList[i]) == "undefined" || friendsList[i] == "") {

                // Check wheathe the value is empty
                return " There is an Empty Value on index["+ i +"]";

            } else if (typeof (friendsList[i]) != 'string') {

                // Check if it's a String
                return "Pleas provide a String Value for index["+ i +"]" ;

            } else{
                // Checks the Largest name
                if (largestName.length < friendsList[i].length) {
                    // assigns the new largest value
                    largestName = friendsList[i];
                }
            }
        }
        // returns the largst name.
        return largestName;
    }
}

var myFriends = [ 'j','j','j','j','j', , 23, "-332"];
console.log(megaFriend(myFriends));
