document.addEventListener("DOMContentLoaded", function (event) {
    var d = new Date("July 21, 1983 00:00:00:000");
    const mil = d.getMilliseconds(1); // Miliseconds
    const s = d.getTime(1000); // Seconds Should be calling a method in a date classs
    const min = d.getTime(60000); // Minutes


    //We need to get this to display!
    let millisecond = document.getElementById('millisecond').innerHTML;
    const second = document.getElementById('second').innerHTML;
    const minute = document.getElementById("minute").innerHTML;


    let milsGo = setInterval(mil, 1);
    let minusMillis = d.getMilliseconds(-1000); // -1 second declaration

    if (mil === s) {
        s + 1; // +1 to seconds
        minusMillis;
        if (s == 60) {
            minusMillis;

            s -= 1;
            min += 1;
            if (min == 60 && s == 60 && mil == 60) {

                clearInterval(mil);
                clearInterval(s);
                clearInterval(min);

            }
        }
    }



    // Some code I'll use in the future

    // setTimeout(function(){
    //   document.getElementById("myVideo").play();
    // }, 5000);
});