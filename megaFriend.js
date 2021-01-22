//** Function 04 : megaFriend /////////////////////////*/

// This function takes an array of string values as parameters 
// and returns the 1st largest value if multile avaialble
function megaFriend (friendsList){

    var largestName = friendsList[0];

    for(i = 0; i< friendsList.length; i++){
        if(largestName.length < friendsList[i].length){
            largestName = friendsList[i];            
         }
    }
    return largestName;
}

// console.log(megaFriend(myFriends));
