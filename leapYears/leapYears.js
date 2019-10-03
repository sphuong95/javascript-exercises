const leapYears = function(year) {
    //if they are divisible by 4
    if (year % 4 == 0 ){
        //non century years
        if (year % 100 !== 0) {
                return true;
            }
        //years divisble by 100
        else if ((year/100)%4 == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

module.exports = leapYears
