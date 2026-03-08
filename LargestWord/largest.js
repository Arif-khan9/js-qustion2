// find Longest Word in String



function findLongestWord(str){
 let words = str.split(" ")
 let longest = ""

 for(let i = 0; i < words.length; i++){

   if(words[i].length > longest.length){
      longest = words[i]
   }

 }

 return longest
}

console.log(findLongestWord("I am learning javascript programming"))