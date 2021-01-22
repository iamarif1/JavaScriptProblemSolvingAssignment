//https://github.com/iamarif1/JavaScriptProblemSolvingAssignment

// ************ kilometerToMeter ************

function kilometerToMeter(kilometer) {
    if (kilometer >= 0) {
        //1 kilometer = 1000 meter
        var meter = kilometer * 1000;
    } else {
        var meter = "Distance can not be negative"
    }
    return meter;
}


// ************ budgetCalculator ************

function budgetCalculator(watch, mobile, laptop) {
    if (watch >= 0 && mobile >= 0 && laptop >= 0) {
        var watchPrice = watch * 50;
        var mobilePrice = mobile * 100;
        var laptopPrice = laptop * 500;
        var totalPrice = watchPrice + mobilePrice + laptopPrice;
    } else {
        var totalPrice = "You entered invalid Price"
    }
    return totalPrice;
}

// ************ hotelCost ************

function hotelCost(day) {
    if (day > 0) {
        var firstTen = day;
        var secondTen = 0;
        var extraDays = 0;
        if (firstTen > 10) {
            firstTen = 10;
        }
        day = day - firstTen;
        secondTen = day;
        if (secondTen > 10) {
            secondTen = 10;
        }
        day = day - secondTen;
        extraDays = day;
        var totalCost = firstTen * 100 + secondTen * 80 + extraDays * 50;
    } else {
        var totalCost = "You Entered Invalid Days";
    }
    return totalCost;
}
var total = hotelCost(25);
console.log(total);

// ************ megaFriend ************

function megaFriend(friend) {
    var max = 0;
    var longestName;

    for (var i = 0; i < friend.length; i++) {
        if (friend[i].length > max) {
            var max = friend[i].length;
            longestName = friend[i];
        }
    }
    return longestName;
}
