'use strict';
//under weight=<18.5
//Normal weight = 18.5-24.9
//overwieght = 25-29.9
//Obesity=BMI of 38 or greater

function bmiCategory(bmi) {
    if (bmi< 18.5){
        console.log("underweight");
   } else if(bmi<25){
       console.log("normal weight");
   } else if(bmi < 30 ) {
       console.log("Overweight");
   }else {
       console.log("Obesity");
   }
}