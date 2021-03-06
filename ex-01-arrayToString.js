/**
 * Ex-01 : arrayToString()
 *
 * Write a function called `arrayToString` that takes
 *  an array of values and combines them into one large string.
 *
 * You must use a for-loop to solve this problem.
 **/

 function arrayToString(strArray){
   var newString = "";
   for ( i = 0; i < strArray.length;   i++ ){
     newString = newString + strArray[i];
   }
   return newString;
 }

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var output1 = arrayToString(["Hello", "how", "are", "you"])

var coolArr = ['cool', 'great', 'nice', 'awesome', 'sweet']
var output2 = arrayToString(sugArr)

console.assert( output1 === "Hellohowareyou" )
console.assert( output2 === 'coolgreatniceawesomesweet' )
