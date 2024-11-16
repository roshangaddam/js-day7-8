console.log("task-5//vowels Function")
function containsVowels(str) {
const vowels = "aeiouAEIOU";
for (let i = 0; i < str.length; i++) {
for (let j = 0; j < vowels.length; j++) {
if (str[i] === vowels[j]) {
 return true; 
}
}
}
return false;  
}
console.log(containsVowels("hello")); 
console.log(containsVowels("roshan"));  
console.log(containsVowels("chikku")); 
console.log(containsVowels("cry"));