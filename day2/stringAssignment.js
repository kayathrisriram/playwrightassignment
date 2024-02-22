/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
*/

let s = "Hello World";
let newword = s.split(" ");
console.log(newword[1].length);

/* 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
*/

let str="   fly me to the moon  ";
str=str.trim();
console.log(str);
let newstr=str.split(" ");
console.log(newstr)
console.log("the last word  is "  + newstr[4] + "  with length  " + newstr[4].length);
/*

Example 3: 

Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
*/

let str1;
let str2;
function isAnagram(str1,str2)
{
    let newstr1= str1.split("");
    //console.log(newstr1)
    let newstr2=str2.split("");
    //console.log(newstr2)

    let c=newstr1.sort().join("");
    console.log(c)
    let d=newstr2.sort().join("");
    console.log(d)
    
    if(c===d){
        console .log("given string is anagram");
    }else
        console.log("not anagram")
    
    

}

isAnagram("listen","silent");
isAnagram("hello","world");
/*
If the given string and reverse string is same --> palindrome

Objective: If the given string is palindrome

hints:

1) use the above logic to reverse the string
2) if the reverse string === original string --> true else the false

*/
let strcheck="level";
let ostr=strcheck.split("");
let rstring="";
function  reversestring(strcheck)
{
for(let i=ostr.length-1;i>=0;i--)
{
     rstring= rstring+ ostr[i];
   

}
//console.log("reversed string is " + rstring);
if(strcheck ===rstring)
{
    console.log("given string  " +  strcheck + "  is a palindrome");
}else{
    console.log("given string  " +  strcheck + "  is not a palindrome")
}
}

reversestring(strcheck)
