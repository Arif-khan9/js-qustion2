// Write a program that checks if a given alphabet is a vowel or a consonant.


function checkChar(char){
    ch  = char.toLowerCase(); 
    if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
    return console.log("Given character is a Vowel");
    return console.log("Given character is a Consonent");
}


checkChar('G');
checkChar('A')
