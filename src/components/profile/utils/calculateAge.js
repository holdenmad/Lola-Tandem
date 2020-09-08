const calculateAge = (bday) => {
    console.log(bday);
if (!bday) return null;
        var millisecondsBetweenDOBAnd1970 = Date.parse(bday);
        var millisecondsBetweenNowAnd1970 = Date.now();
        var ageInMilliseconds =
          millisecondsBetweenNowAnd1970 - millisecondsBetweenDOBAnd1970;
        var milliseconds = ageInMilliseconds;
        var second = 1000;
        var minute = second * 60;
        var hour = minute * 60;
        var day = hour * 24;
        var month = day * 30;
        var year = day * 365;
        var years = Math.round(milliseconds / year);
      return years;
}

export default calculateAge;