"use strict";
// Exercise: Create an enum `DaysOfWeek` with values for each day of the week.
// Then, write a function `isWeekend` that accepts a value from the enum and returns `true` if it's Saturday or Sunday, and `false` otherwise.
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek["Sunday"] = "Sun";
    DaysOfWeek["Monday"] = "Mon";
    DaysOfWeek["Tuesday"] = "Tue";
    DaysOfWeek["Wednesday"] = "Wed";
    DaysOfWeek["Thursday"] = "Thu";
    DaysOfWeek["Friday"] = "Fri";
    DaysOfWeek["Saturday"] = "Sat";
})(DaysOfWeek || (DaysOfWeek = {}));
function isWeekend(day) {
    if (day === DaysOfWeek.Saturday || day === DaysOfWeek.Sunday) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isWeekend(DaysOfWeek.Saturday));
console.log(isWeekend(DaysOfWeek.Wednesday));
// Expected output:
// true
// false
