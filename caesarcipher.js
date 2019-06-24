/* 
  
Caesar Cipher Algorithm 
  
The funtion will take two parameters, a string and a number. 
The objective is to shift every letter in the str by the num. 
Example: zoo keeper => bqq mggrgt 
The algorithm should be able to handle negative numbers => be able to shift the str backward as well if the num is negative. 
  
*/ 
  
  
function caesarCipher (str, num) { 
    num = num % 26; 
    var lowerstr = str.toLowerCase(); 
    var alphArr = 'abcdefghijklmnopqrstuvwxyz'.split(''); 
    var caestring = ''; 
                
    for(var i = 0; i < lowerstr.length; i++){ 
        var currentLetter = lowerstr[i]; 
        if (currentLetter === ' '){ 
            caestring += currentLetter; 
            continue; 
        }
        var currentIndex = alphArr.indexOf(currentLetter); 
        var newIndex = currentIndex + num; 
        if (newIndex > 25) { 
            newIndex = newIndex - 26; 
        } 
        if (newIndex < 0){ 
            newIndex = 26 + newIndex; 
        } 
        if (str[i] === str[i].toUpperCase()) { 
            caestring += alphArr[newIndex].toUpperCase(); 
        } 
        else caestring += alphArr[newIndex]; 
        } 
        console.log (caestring); 
} 
  
caesarCipher ('zoo keeper', 2);