'use strict';
 
// 0-23 input
// return: am|pm baisi the hour
function Clock12(hour) {

if(hour <=12){
    return "am";
}
else{
    return "pm";
}

}
console.log("1->  "+ Clock12(1));
console.log("23 ->" + Clock12(23));