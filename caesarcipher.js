
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
