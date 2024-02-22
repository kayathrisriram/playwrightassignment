let str1;
let str2;
function isAnagram(str1,str2)
{
    if (str1.length ==str2.length){

        let newstr1=str1.split("");
        let newstr2=str2.split("");
        for(let i=0;i<=newstr1.length-1;i++){
            for (let j=0;j<=newstr2.length-1;j++){
                    if(newstr1[i]==newstr2[j]){
                     //console.log(newstr1[i] + newstr2[j])
                     return true;
                    }else{
                        console.log("not anagram");
                    }
                    
        }
    }
    console.log("given  string  is anagram")
    }else{
        console.log("length of words is not same so not anagram");
    }
}

isAnagram("silent","listen");
isAnagram("cats","dog")