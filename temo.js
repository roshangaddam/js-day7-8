function Temperature(temp, scale) {
         if (scale === "C") {
         return (temp - 32) * (5 / 9);
         }  
         else if (scale === "F") {
         return (temp * (9 / 5)) + 32;
         }
         else {
         return error;
         }
 }
console.log(Temperature(32, "C")); 
console.log(Temperature(0, "F")); 
console.log(Temperature(100, "C")); 
console.log(Temperature(37.78, "F")); 
console.log(Temperature(212, "C")); 
console.log(Temperature(100, "F"));